import { useState, ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { User, PageProps } from '@/types';
import { Button } from '@/components/ui/button';

interface Props extends PageProps {
  user: User;
  header?: ReactNode;
  children: ReactNode;
}

export default function AuthenticatedLayout({ user, header, children }: Props) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

  // Debug route function
  console.log('Route function:', route('profile.edit'));

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="shrink-0 flex items-center">
                <Link href="/">
                  <h1 className="text-xl font-bold">CRMApp</h1>
                </Link>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="ml-3 relative">
                <Button
                  variant="ghost"
                  onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                >
                  {user.name}
                </Button>
                {showingNavigationDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <Link href={route('profile.edit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link
                      href={route('logout')}
                      method="post"
                      as="button"
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Log Out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}