"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  email: string;
  name: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for development
const mockUsers = [
  { email: "demo@spiin.com", password: "demo123", name: "Demo User" },
  { email: "user@example.com", password: "password", name: "John Doe" },
  { email: "admin@spiin.com", password: "admin123", name: "Admin User" }
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Get all users (mock + dynamically added)
    const dynamicUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]');
    const allUsers = [...mockUsers, ...dynamicUsers];

    const foundUser = allUsers.find(
      u => u.email === email && u.password === password
    );

    if (foundUser) {
      const userData = {
        email: foundUser.email,
        name: foundUser.name,
        isAuthenticated: true
      };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Check if user already exists
    const dynamicUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]');
    const allUsers = [...mockUsers, ...dynamicUsers];

    if (allUsers.find(u => u.email === email)) {
      return false; // User already exists
    }

    // Add new user
    const newUser = { email, password, name };
    dynamicUsers.push(newUser);
    localStorage.setItem('mockUsers', JSON.stringify(dynamicUsers));

    // Log them in
    const userData = {
      email,
      name,
      isAuthenticated: true
    };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}