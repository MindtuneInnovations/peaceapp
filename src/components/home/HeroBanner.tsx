
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

const HeroBanner: React.FC = () => {
  const { toast } = useToast();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: ""
  });
  
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };
  
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value
    });
  };
  
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Check if user exists in localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u: any) => 
          u.username === loginForm.username && 
          u.password === loginForm.password
      );
      
      if (user) {
        // Store current user
        localStorage.setItem("currentUser", JSON.stringify(user));
        toast({
          title: "Login Successful",
          description: `Welcome back, ${user.username}!`,
        });
        setIsLoginOpen(false);
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid username or password.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };
  
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerForm.password !== registerForm.confirmPassword) {
      toast({
        title: "Registration Failed",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userExists = users.some(
        (user: any) => user.username === registerForm.username
      );
      
      if (userExists) {
        toast({
          title: "Registration Failed",
          description: "Username already exists.",
          variant: "destructive",
        });
      } else {
        // Save new user
        const newUser = {
          id: Date.now().toString(),
          username: registerForm.username,
          password: registerForm.password,
          createdAt: new Date().toISOString(),
        };
        
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        
        toast({
          title: "Registration Successful",
          description: "Your account has been created.",
        });
        setIsLoginOpen(false);
      }
      setIsLoading(false);
    }, 1000);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex flex-col gap-6 px-4 py-6 max-sm:p-4">
      <div className="text-center">
        <h1 className="text-[#E0E0E0] text-2xl font-bold mb-3">
          Master Your Finances
        </h1>
        <p className="text-[#B3B3B3] text-sm font-normal mb-6">
          Learn financial literacy designed for STEM students
        </p>
        <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
          <DialogTrigger asChild>
            <button
              className="w-full h-12 text-white text-base font-semibold shadow-[0px_4px_6px_rgba(93,173,236,0.20),0px_10px_15px_rgba(93,173,236,0.20)] rounded-xl border-[none] bg-[#5DADEC] hover:bg-[#4A9AD9] transition-colors"
              onClick={() => console.log("Get Started clicked")}
            >
              Get Started
            </button>
          </DialogTrigger>
          <DialogContent className="bg-[#1E1E2E] border-[#333] text-white max-w-md w-[90%]">
            <DialogHeader>
              <DialogTitle className="text-center text-xl text-white">
                Welcome to Finance Master
              </DialogTitle>
              <DialogDescription className="text-center text-gray-400">
                Sign in or create an account to start learning
              </DialogDescription>
            </DialogHeader>
            
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="w-full grid grid-cols-2 mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="login-username">Username</Label>
                    <Input 
                      id="login-username"
                      name="username"
                      placeholder="Enter your username"
                      value={loginForm.username}
                      onChange={handleLoginChange}
                      required
                      className="bg-[#252538] border-[#333]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Input 
                        id="login-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        required
                        className="bg-[#252538] border-[#333] pr-10"
                      />
                      <button 
                        type="button" 
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#5DADEC] hover:bg-[#4A9AD9]"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="register-username">Username</Label>
                    <Input 
                      id="register-username"
                      name="username"
                      placeholder="Choose a username"
                      value={registerForm.username}
                      onChange={handleRegisterChange}
                      required
                      className="bg-[#252538] border-[#333]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Input 
                        id="register-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={registerForm.password}
                        onChange={handleRegisterChange}
                        required
                        className="bg-[#252538] border-[#333] pr-10"
                      />
                      <button 
                        type="button" 
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input 
                      id="confirm-password"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={registerForm.confirmPassword}
                      onChange={handleRegisterChange}
                      required
                      className="bg-[#252538] border-[#333]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#5DADEC] hover:bg-[#4A9AD9]"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full h-40 overflow-hidden rounded-2xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8aad140727cccf10c0ec388a4eaced5913a8c71"
          alt="Students learning"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
