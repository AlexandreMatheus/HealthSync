import React from 'react';
import { supabase } from '../supabaseClient';

type SidebarProps = {
  onSelectScreen: (screen: string) => void;
  onLogout: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onSelectScreen, onLogout  }) => {
  const handleLogout = async () => {
    await supabase.auth.signOut(); // Desloga o usuário do Supabase
    onLogout(); // Atualiza o estado de logout na aplicação principal
  };

  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed top-0 left-0">
      <h2 className="text-2xl font-bold text-center py-6">Meu App</h2>
      <ul className="space-y-4 p-4">
        <li>
          <button
            onClick={() => onSelectScreen('pacientes')}
            className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
          >
            pacientes
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelectScreen('settings')}
            className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
          >
            Configurações
          </button>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 py-2 rounded text-white font-semibold"
          >
            Sair
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;