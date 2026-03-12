import React, { useState } from 'react';

export default function RolesCard({ section }) {
  const [active, setActive] = useState(0);
  const roles = section.roles || [];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)' }}>
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(55,65,81,0.5)' }}>
        <p className="text-xs font-mono font-medium tracking-wider" style={{ color: '#94A3B8' }}>
          👥 ROLES
        </p>
        {section.title && (
          <p className="text-base font-semibold mt-1" style={{ color: '#F9FAFB' }}>{section.title}</p>
        )}
        {section.description && (
          <p className="text-sm mt-2" style={{ color: '#6B7280' }}>{section.description}</p>
        )}
      </div>

      {/* Role Tabs */}
      <div className="flex" style={{ borderBottom: '1px solid rgba(55,65,81,0.4)', background: 'rgba(15,23,42,0.3)' }}>
        {roles.map((role, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex-1 flex flex-col items-center gap-1 px-3 py-3 text-xs font-medium transition-all"
            style={{
              background: active === i ? 'rgba(59,130,246,0.1)' : 'transparent',
              color: active === i ? '#F9FAFB' : '#6B7280',
              borderBottom: active === i ? '2px solid #3B82F6' : '2px solid transparent',
            }}
          >
            <span className="text-xl">{role.icon}</span>
            {role.name}
          </button>
        ))}
      </div>

      {/* Active Role Details */}
      {roles[active] && (
        <div className="px-5 py-5">
          <div className="mb-4">
            <p className="text-xs font-semibold mb-2" style={{ color: '#6B7280' }}>CAN DO</p>
            <ul className="space-y-2">
              {roles[active].actions.map((action, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: '#CBD5E1' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#10B981' }} />
                  {action}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="p-3 rounded-lg"
            style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <p className="text-xs font-semibold mb-1" style={{ color: '#6B7280' }}>IMPORTANT NOTE</p>
            <p className="text-sm" style={{ color: '#FCA5A5' }}>{roles[active].restriction}</p>
          </div>
        </div>
      )}
    </div>
  );
}