'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchInput = forwardRef(({ className, onChange, ...props }, ref) => {
  return (
    <div className="relative">
      <Search className="absolute top-1/2 -translate-y-1/2 left-3 size-4 text-slate-600" />
      <Input
        type="search"
        className={cn('ps-9', className)}
        ref={ref}
        onChange={onChange}
        {...props}
      />
    </div>
  );
});
SearchInput.displayName = 'SearchInput';

export { SearchInput };
