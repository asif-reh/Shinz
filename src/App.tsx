import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home as HomeIcon, CreditCard, MessageSquare } from 'lucide-react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import PaymentGateway from './components/PaymentGateway';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <HomeIcon className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">FreePayGateway</span>
              </Link>
              <div className="ml-10 flex items-center space-x-4">
                <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
                  <HomeIcon className="h-5 w-5" />
                  <span className="ml-1">Dashboard</span>
                </Link>
                <Link to="/payment" className="text-gray-600 hover:text-gray-900">
                  <CreditCard className="h-5 w-5" />
                  <span className="ml-1">Payment</span>
                </Link>
                <Link to="/chat" className="text-gray-600 hover:text-gray-900">
                  <MessageSquare className="h-5 w-5" />
                  <span className="ml-1">AI Chat</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<PaymentGateway />} />
          <Route path="/chat" element={<AIChat />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;