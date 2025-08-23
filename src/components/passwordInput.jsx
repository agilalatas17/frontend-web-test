'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordInput({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const type = showPassword ? 'text' : 'password';
  const Icon = showPassword ? EyeOff : Eye;

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="relative">
        <Input type={type} className={`pe-9 ${className}`} {...props} />
        <button
          type="button"
          onClick={handleToggle}
          className="absolute top-1/2 -translate-y-1/2 cursor-pointer right-3"
        >
          <Icon className="size-4 text-slate-600" />
        </button>
      </div>
    </>
  );
}
