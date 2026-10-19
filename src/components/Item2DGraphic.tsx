import React from 'react';

interface Item2DGraphicProps {
  id?: string;
  symbol?: string;
  name?: string;
  className?: string;
}

export const Item2DGraphic: React.FC<Item2DGraphicProps> = ({
  id = '',
  symbol = '',
  name = '',
  className = 'w-8 h-8',
}) => {
  const key = `${symbol} ${id} ${name}`.toLowerCase();

  // ========================================================
  // BỘ QUÀ TẶNG SJC (ĐẶC QUYỀN VIỆN BÁO CHÍ & TRUYỀN THÔNG)
  // ========================================================

  // SJC 1: Chiếc Túi tote SJC vải canvas có quai đeo
  if (key.includes('tote') || key.includes('sjc_tui_tote') || (key.includes('túi') && key.includes('sjc'))) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <circle cx="32" cy="32" r="22" fill="#2563eb" opacity="0.15" />
        {/* Handles */}
        <path
          d="M23 26 C23 10, 41 10, 41 26"
          stroke="#1e3a8a"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M23 26 C23 11, 41 11, 41 26"
          stroke="#60a5fa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Canvas Bag Body */}
        <rect
          x="12"
          y="22"
          width="40"
          height="36"
          rx="5"
          fill="#f8fafc"
          stroke="#0f172a"
          strokeWidth="2.5"
        />
        {/* Blue Accent Bottom */}
        <path
          d="M12 46 C12 52, 16 58, 22 58 L42 58 C48 58, 52 52, 52 46 Z"
          fill="#1d4ed8"
          stroke="#0f172a"
          strokeWidth="2"
        />
        {/* Top fold line */}
        <line x1="14" y1="28" x2="50" y2="28" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* SJC Signature Badge & Quill Pen */}
        <rect x="21" y="31" width="22" height="15" rx="3" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1.5" />
        {/* Quill / Pen in Gold */}
        <path d="M32 33 L35 38 L29 42 L31 39 Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.8" />
        {/* SJC text label */}
        <text x="32" y="43" fill="#ffffff" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">
          SJC
        </text>
      </svg>
    );
  }

  // SJC 2: Bình giữ nhiệt kim loại màu xanh SJC
  if (key.includes('thermos') || key.includes('binh_giu_nhiet') || (key.includes('giữ nhiệt') && key.includes('sjc'))) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <circle cx="32" cy="32" r="22" fill="#06b6d4" opacity="0.18" />
        {/* Metallic Chrome Cap */}
        <rect x="23" y="6" width="18" height="8" rx="2.5" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
        <rect x="25" y="8" width="14" height="2" fill="#ffffff" />
        {/* Strap loop */}
        <path d="M41 10 C47 10, 47 16, 41 16" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" />
        {/* Thermos Bottle Body in Metallic SJC Teal-Blue */}
        <rect x="19" y="14" width="26" height="44" rx="5" fill="#0284c7" stroke="#0c4a6e" strokeWidth="2.5" />
        {/* Metallic sheen gradient highlight */}
        <path d="M22 16 H26 V56 H22 Z" fill="#38bdf8" opacity="0.6" />
        {/* Gold SJC Crest */}
        <circle cx="32" cy="32" r="6.5" fill="#1e3a8a" stroke="#fbbf24" strokeWidth="1.3" />
        <text x="32" y="34.5" fill="#fef08a" fontSize="5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
          SJC
        </text>
        {/* Temperature indicator bar */}
        <rect x="26" y="44" width="12" height="3" rx="1" fill="#0f172a" />
        <circle cx="28" cy="45.5" r="1" fill="#22c55e" />
        <text x="34" y="46.5" fill="#38bdf8" fontSize="2.8" fontWeight="bold" fontFamily="monospace">
          COLD
        </text>
      </svg>
    );
  }

  // SJC 3: Chai xịt chống nắng nắp cam/trắng SPF 50
  if (key.includes('sunscreen') || key.includes('xit_chong_nang') || (key.includes('chống nắng') && key.includes('sjc'))) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <circle cx="32" cy="32" r="22" fill="#f97316" opacity="0.15" />
        {/* Bright Orange Cap */}
        <rect x="24" y="6" width="16" height="10" rx="3" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
        {/* Spray Nozzle */}
        <rect x="29" y="16" width="6" height="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="32" cy="17.5" r="0.8" fill="#f97316" />
        {/* White Matte Bottle Body */}
        <rect x="19" y="19" width="26" height="39" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2.5" />
        {/* Orange Sunshine Band */}
        <path d="M19 32 Q32 36 45 32 L45 42 Q32 46 19 42 Z" fill="#f97316" />
        <circle cx="32" cy="38" r="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
        {/* SPF 50+ Label */}
        <text x="32" y="52" fill="#1e3a8a" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
          SPF50+
        </text>
        <text x="32" y="27" fill="#ea580c" fontSize="4" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">
          SJC CARE
        </text>
      </svg>
    );
  }

  // SJC 4: Chiếc khăn lạnh đóng gói mát mắt
  if (key.includes('cooling_towel') || key.includes('khan_lanh') || (key.includes('khăn lạnh') && key.includes('sjc'))) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Ice Chill Aura */}
        <circle cx="32" cy="32" r="22" fill="#06b6d4" opacity="0.2" />
        {/* Ice Pouch Package */}
        <rect
          x="10"
          y="16"
          width="44"
          height="32"
          rx="5"
          fill="#0284c7"
          stroke="#0369a1"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Serrated crimp edges on sides */}
        <path d="M10 16 L12 20 L10 24 L12 28 L10 32 L12 36 L10 40 L12 44 L10 48" stroke="#075985" strokeWidth="1.5" />
        <path d="M54 16 L52 20 L54 24 L52 28 L54 32 L52 36 L54 40 L52 44 L54 48" stroke="#075985" strokeWidth="1.5" />
        {/* Snowflake graphic */}
        <g transform="translate(32 32)">
          <line x1="-8" y1="0" x2="8" y2="0" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" />
          <line x1="0" y1="-8" x2="0" y2="8" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" />
          <line x1="-5.5" y1="-5.5" x2="5.5" y2="5.5" stroke="#bae6fd" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="-5.5" y1="5.5" x2="5.5" y2="-5.5" stroke="#bae6fd" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="0" cy="0" r="2" fill="#ffffff" />
        </g>
        {/* Frost droplets */}
        <circle cx="18" cy="24" r="1.5" fill="#e0f2fe" opacity="0.9" />
        <circle cx="46" cy="38" r="1.5" fill="#e0f2fe" opacity="0.9" />
        <text x="32" y="24" fill="#ffffff" fontSize="4.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">
          SJC ICE COOL
        </text>
      </svg>
    );
  }

  // ========================================================
  // 1. QUÂN TRANG & SINH HOẠT THIẾT YẾU (BẮT BUỘC)
  // ========================================================

  // 1. Bộ quần áo gấp vuông gọn gàng (Set 1 & 2)
  if (key.includes('outfit') || key.includes('quan_ao') || key.includes('quần áo') || key.includes('quân phục')) {
    const isSet2 = key.includes('2');
    const mainColor = isSet2 ? '#3b5e43' : '#4d7c57';
    const darkFold = isSet2 ? '#2b4732' : '#395c40';
    const lightHighlight = isSet2 ? '#53825d' : '#659c71';

    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <rect x="9" y="13" width="46" height="42" rx="6" fill="#1b2e1f" opacity="0.3" />
        {/* Base folded shirt */}
        <rect x="8" y="10" width="48" height="44" rx="6" fill={mainColor} stroke="#223d26" strokeWidth="2.5" />
        {/* Collar fold */}
        <path d="M22 10 L32 23 L42 10 Z" fill="#2d4a32" stroke="#1f3624" strokeWidth="2" />
        <path d="M25 10 L32 19 L39 10" stroke={lightHighlight} strokeWidth="1.5" strokeLinecap="round" />
        {/* Buttons */}
        <circle cx="32" cy="27" r="1.8" fill="#d4af37" stroke="#997a15" strokeWidth="1" />
        <circle cx="32" cy="35" r="1.8" fill="#d4af37" stroke="#997a15" strokeWidth="1" />
        <circle cx="32" cy="43" r="1.8" fill="#d4af37" stroke="#997a15" strokeWidth="1" />
        {/* Fold lines */}
        <path d="M12 28 H52" stroke={darkFold} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 28.5 H52" stroke={lightHighlight} strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <path d="M12 40 H52" stroke={darkFold} strokeWidth="2.5" strokeLinecap="round" />
        {/* Rank badge */}
        <rect x="36" y="22" width="13" height="5" rx="1.5" fill="#c93838" stroke="#871b1b" strokeWidth="1" />
        <rect x="38" y="24" width="9" height="1.5" rx="0.5" fill="#fef08a" />
      </svg>
    );
  }

  // 2. Đôi giày vải bộ đội cao cổ / giày thể thao
  if (key.includes('shoes') || key.includes('giay') || key.includes('giày')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Left Shoe */}
        <g transform="translate(-1, 0)">
          <path d="M14 14 C18 10, 26 12, 28 20 C29 27, 28 42, 27 50 C26 53, 16 53, 14 50 C12 40, 11 20, 14 14 Z" fill="#292524" stroke="#1c1917" strokeWidth="2" />
          <path d="M15 16 C18 13, 25 15, 26 21 C27 28, 26 40, 25 47 C24 49, 17 49, 15 47 C14 39, 13 22, 15 16 Z" fill="#3f593b" stroke="#253823" strokeWidth="1.5" />
          <path d="M15 16 C18 13, 25 15, 26 21 C21 21, 16 20, 15 16 Z" fill="#d6d3d1" stroke="#a8a29e" strokeWidth="1" />
          <line x1="17" y1="26" x2="24" y2="28" stroke="#f5f5f4" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="31" x2="24" y2="33" stroke="#f5f5f4" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="36" x2="24" y2="38" stroke="#f5f5f4" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        {/* Right Shoe */}
        <g transform="translate(22, 0)">
          <path d="M23 14 C19 10, 11 12, 9 20 C8 27, 9 42, 10 50 C11 53, 21 53, 23 50 C25 40, 26 20, 23 14 Z" fill="#292524" stroke="#1c1917" strokeWidth="2" />
          <path d="M22 16 C19 13, 12 15, 11 21 C10 28, 11 40, 12 47 C13 49, 20 49, 22 47 C23 39, 24 22, 22 16 Z" fill="#3f593b" stroke="#253823" strokeWidth="1.5" />
          <path d="M22 16 C19 13, 12 15, 11 21 C16 21, 21 20, 22 16 Z" fill="#d6d3d1" stroke="#a8a29e" strokeWidth="1" />
          <line x1="20" y1="26" x2="13" y2="28" stroke="#f5f5f4" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="31" x2="13" y2="33" stroke="#f5f5f4" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="36" x2="13" y2="38" stroke="#f5f5f4" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  // 3. Tuýp kem đánh răng bạc hà
  if (key.includes('toothpaste') || key.includes('kem_danh_rang') || key.includes('kem đánh răng')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <rect x="25" y="6" width="14" height="8" rx="2" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
        <rect x="27" y="14" width="10" height="3" fill="#38bdf8" />
        <path d="M22 17 L42 17 L48 54 L16 54 Z" fill="#f8fafc" stroke="#334155" strokeWidth="2.5" />
        <path d="M19 28 Q32 36 45 28 L47 42 Q32 50 17 42 Z" fill="#0ea5e9" opacity="0.85" />
        <path d="M18 34 Q32 42 46 34 L47 42 Q32 50 17 42 Z" fill="#10b981" opacity="0.8" />
        <circle cx="32" cy="48" r="2.5" fill="#059669" />
        <line x1="16" y1="53" x2="48" y2="53" stroke="#94a3b8" strokeWidth="2" />
      </svg>
    );
  }

  // 4. Bàn chải đánh răng du lịch có nắp đậy
  if (key.includes('toothbrush') || key.includes('ban_chai') || key.includes('bàn chải')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Head bristles */}
        <rect x="24" y="8" width="16" height="14" rx="3" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
        <line x1="28" y1="10" x2="28" y2="20" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="10" x2="32" y2="20" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="36" y1="10" x2="36" y2="20" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" />
        {/* Neck */}
        <path d="M29 22 L35 22 L34 32 L30 32 Z" fill="#0284c7" />
        {/* Ergonomic handle */}
        <path d="M28 32 C28 32, 26 42, 28 54 C29 57, 35 57, 36 54 C38 42, 36 32, 36 32 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
        {/* Rubber grip pads */}
        <rect x="30" y="38" width="4" height="8" rx="2" fill="#38bdf8" />
      </svg>
    );
  }

  // 5. Móc áo nhựa xanh quân đoàn
  if (key.includes('hangers') || key.includes('moc_ao') || key.includes('móc')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Hook */}
        <path d="M32 20 C32 12, 39 12, 39 16 C39 20, 32 20, 32 24" stroke="#059669" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Triangle Hanger Body */}
        <polygon points="32,24 10,44 54,44" fill="#dcfce7" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
        {/* Lower bar */}
        <line x1="12" y1="44" x2="52" y2="44" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
        {/* Straps notches */}
        <circle cx="20" cy="34" r="1.5" fill="#15803d" />
        <circle cx="44" cy="34" r="1.5" fill="#15803d" />
      </svg>
    );
  }

  // 6. Sổ tay quân sự bìa xanh
  if (key.includes('notebook') || key.includes('so_tay') || key.includes('sổ tay')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <rect x="14" y="10" width="38" height="46" rx="4" fill="#15803d" stroke="#166534" strokeWidth="2.5" />
        {/* Spine */}
        <rect x="14" y="10" width="7" height="46" rx="2" fill="#14532d" />
        {/* Star badge */}
        <polygon points="36,26 38,32 44,32 39,36 41,42 36,38 31,42 33,36 28,32 34,32" fill="#fde047" stroke="#ca8a04" strokeWidth="0.8" />
        {/* Lined ribbon */}
        <path d="M42 10 V56 L39 52 L36 56 V10" fill="#dc2626" opacity="0.85" />
      </svg>
    );
  }

  // 7. Bút bi quân sự & bút viết
  if (key.includes('pens') || key.includes('but_viet') || key.includes('bút') || key.includes('bút bi')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Blue Pen (Angled) */}
        <g transform="rotate(-30 32 32)">
          <rect x="30" y="8" width="5" height="44" rx="1.5" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1.5" />
          <polygon points="30,8 35,8 32.5,2" fill="#d1d5db" stroke="#6b7280" strokeWidth="1" />
          <circle cx="32.5" cy="2" r="0.8" fill="#1e3a8a" />
          <rect x="29" y="16" width="7" height="8" rx="1" fill="#1e40af" />
          <rect x="30.5" y="48" width="4" height="5" rx="1" fill="#1e3a8a" />
        </g>
        {/* Red Pen */}
        <g transform="rotate(30 32 32)">
          <rect x="29" y="8" width="5" height="44" rx="1.5" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <polygon points="29,8 34,8 31.5,2" fill="#d1d5db" stroke="#6b7280" strokeWidth="1" />
          <circle cx="31.5" cy="2" r="0.8" fill="#7f1d1d" />
        </g>
      </svg>
    );
  }

  // 8. Khăn mặt bông mềm mại
  if (key.includes('towel') || key.includes('khan_tam') || key.includes('khăn mặt') || key.includes('khăn tắm')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <rect x="10" y="14" width="44" height="38" rx="6" fill="#000000" opacity="0.25" />
        <rect x="8" y="12" width="46" height="38" rx="6" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
        <path d="M12 24 H50" stroke="#bae6fd" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2" />
        <path d="M12 32 H50" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 40 H50" stroke="#bae6fd" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2" />
        <path d="M8 44 C14 48, 20 44, 26 48 C32 44, 38 48, 44 44 C48 47, 52 45, 54 44" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 9. Dầu gội / sữa tắm mini
  if (key.includes('shampoo') || key.includes('dau_goi') || key.includes('dầu gội')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <rect x="25" y="8" width="14" height="9" rx="2" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
        <line x1="25" y1="12" x2="39" y2="12" stroke="#38bdf8" strokeWidth="1.5" />
        <rect x="18" y="17" width="28" height="38" rx="8" fill="#ecfeff" stroke="#0891b2" strokeWidth="2.5" />
        <path d="M19 28 Q32 32 45 28 L45 50 C45 53, 42 54, 39 54 L25 54 C22 54, 19 53, 19 50 Z" fill="#06b6d4" opacity="0.8" />
        <rect x="23" y="32" width="18" height="12" rx="2" fill="#ffffff" stroke="#0891b2" strokeWidth="1" />
        <line x1="26" y1="36" x2="38" y2="36" stroke="#0e7490" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="27" y1="40" x2="35" y2="40" stroke="#06b6d4" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 10. Túi lưới giặt đồ
  if (key.includes('laundry_bag') || key.includes('tui_giat') || key.includes('túi giặt') || key.includes('túi lưới')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <rect x="10" y="10" width="44" height="44" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2.5" />
        <line x1="12" y1="18" x2="52" y2="18" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="42" y="15" width="6" height="6" rx="1" fill="#e2e8f0" stroke="#334155" strokeWidth="1.5" />
        {/* Mesh pattern grid */}
        <line x1="18" y1="20" x2="18" y2="52" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="26" y1="20" x2="26" y2="52" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="34" y1="20" x2="34" y2="52" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="42" y1="20" x2="42" y2="52" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="12" y1="26" x2="52" y2="26" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="12" y1="34" x2="52" y2="34" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="12" y1="42" x2="52" y2="42" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    );
  }

  // 11. Bột giặt gói nhỏ & Bột giặt túi to
  if (key.includes('detergent') || key.includes('bot_giat') || key.includes('bột giặt')) {
    const isBig = key.includes('big') || key.includes('to');
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Packet outline */}
        <path
          d={isBig ? "M12 10 L50 6 L54 54 L14 58 Z" : "M14 12 L44 8 L50 52 L16 56 Z"}
          fill="#2563eb"
          stroke="#1d4ed8"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Cut corner */}
        <path d="M44 8 L44 14 L50 14" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="2 2" />
        {/* OMO/Sunburst design */}
        <circle cx="33" cy="30" r={isBig ? 12 : 9} fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
        <path d="M33 22 L33 38 M25 30 L41 30" stroke="#fef08a" strokeWidth="2.5" strokeLinecap="round" />
        {/* Bubbles */}
        <circle cx="22" cy="46" r="3" fill="#93c5fd" opacity="0.9" />
        <circle cx="28" cy="48" r="2" fill="#bfdbfe" opacity="0.9" />
        <circle cx="42" cy="44" r="3.5" fill="#93c5fd" opacity="0.9" />
      </svg>
    );
  }

  // ========================================================
  // 2. ĐỒ DÙNG CÁ NHÂN (TÙY CHỌN & TIỆN ÍCH)
  // ========================================================

  // 12. Quạt tích điện mini cầm tay có cánh quạt
  if (key.includes('hand_fan') || key.includes('quat_mini') || (key.includes('cầm tay') && key.includes('quạt'))) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Fan Guard Head */}
        <circle cx="32" cy="22" r="16" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2.5" />
        {/* 3 Blades */}
        <g transform="translate(32 22)">
          <path d="M0 -2 C4 -12, 10 -10, 0 0 Z" fill="#4ade80" />
          <path d="M0 -2 C4 -12, 10 -10, 0 0 Z" fill="#4ade80" transform="rotate(120)" />
          <path d="M0 -2 C4 -12, 10 -10, 0 0 Z" fill="#4ade80" transform="rotate(240)" />
          <circle cx="0" cy="0" r="3.5" fill="#15803d" />
        </g>
        {/* Handle */}
        <rect x="28" y="38" width="8" height="22" rx="3.5" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
        {/* Power button */}
        <circle cx="32" cy="46" r="1.8" fill="#16a34a" />
        {/* LED charging dot */}
        <circle cx="32" cy="52" r="1" fill="#3b82f6" />
      </svg>
    );
  }

  // 13. Quạt kẹp đầu giường
  if (key.includes('bedside_fan') || key.includes('quat_dau_giuong') || key.includes('kẹp đầu giường')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <circle cx="28" cy="22" r="15" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2.5" />
        <g transform="translate(28 22)">
          <path d="M0 -2 C3 -11, 8 -9, 0 0 Z" fill="#2dd4bf" />
          <path d="M0 -2 C3 -11, 8 -9, 0 0 Z" fill="#2dd4bf" transform="rotate(120)" />
          <path d="M0 -2 C3 -11, 8 -9, 0 0 Z" fill="#2dd4bf" transform="rotate(240)" />
          <circle cx="0" cy="0" r="3" fill="#0f766e" />
        </g>
        {/* Gooseneck flex arm */}
        <path d="M28 37 C28 45, 38 43, 38 50" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Clip clamp */}
        <rect x="34" y="48" width="18" height="8" rx="2" fill="#134e4a" stroke="#042f2e" strokeWidth="1.5" />
        <line x1="34" y1="52" x2="52" y2="52" stroke="#2dd4bf" strokeWidth="1" />
      </svg>
    );
  }

  // 14. Bát & đũa cá nhân
  if (key.includes('bowl_chopsticks') || key.includes('bat_dua') || key.includes('bát') || key.includes('đũa')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Bowl shadow */}
        <ellipse cx="28" cy="34" rx="19" ry="17" fill="#000000" opacity="0.2" />
        {/* Bowl Outer Rim */}
        <circle cx="28" cy="32" r="18" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
        {/* Inner Bowl Depth */}
        <circle cx="28" cy="32" r="13" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
        {/* Floral ceramic pattern */}
        <circle cx="28" cy="32" r="4" fill="#0284c7" />
        {/* Pair of Wooden Chopsticks */}
        <line x1="16" y1="52" x2="52" y2="12" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="54" x2="56" y2="14" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
        {/* Chopstick tips in gold band */}
        <line x1="48" y1="16" x2="52" y2="12" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="52" y1="18" x2="56" y2="14" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 15. Chăn gối gấp nhỏ
  if (key.includes('blanket_pillow') || key.includes('chan_goi') || key.includes('chăn gối') || key.includes('chăn')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Folded blanket base */}
        <rect x="10" y="18" width="44" height="36" rx="6" fill="#3f593b" stroke="#253823" strokeWidth="2.5" />
        {/* Blanket layers */}
        <line x1="10" y1="30" x2="54" y2="30" stroke="#253823" strokeWidth="2" />
        <line x1="10" y1="42" x2="54" y2="42" stroke="#253823" strokeWidth="2" />
        {/* Neat mini pillow on top */}
        <rect x="16" y="10" width="32" height="18" rx="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
        {/* Pillow dent indentation */}
        <ellipse cx="32" cy="19" rx="7" ry="2.5" fill="#e2e8f0" />
      </svg>
    );
  }

  // 16. Xấp giấy A4 & tài liệu
  if (key.includes('a4_paper') || key.includes('giay_a4') || key.includes('giấy a4') || key.includes('tài liệu')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Lower page shadow */}
        <rect x="18" y="14" width="34" height="42" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(-4 35 35)" />
        {/* Crisp Top A4 Sheet */}
        <rect x="15" y="10" width="34" height="44" rx="3" fill="#ffffff" stroke="#334155" strokeWidth="2" />
        {/* Folded Top-Right Corner */}
        <polygon points="41,10 49,18 41,18" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        {/* Ruled text lines */}
        <line x1="20" y1="18" x2="38" y2="18" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="24" x2="44" y2="24" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="30" x2="44" y2="30" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="36" x2="44" y2="36" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="42" x2="36" y2="42" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
        {/* Metal paper clip */}
        <path d="M22 8 V16 C22 18, 25 18, 25 16 V9 C25 7, 28 7, 28 9 V15" stroke="#ef4444" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  // 17. Bình đun siêu tốc inox
  if (key.includes('kettle') || key.includes('binh_sieu_toc') || key.includes('siêu tốc')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Base stand */}
        <ellipse cx="32" cy="52" rx="18" ry="4" fill="#1e293b" />
        {/* Stainless steel kettle body */}
        <path d="M20 18 L16 48 C16 51, 48 51, 48 48 L44 18 Z" fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" />
        {/* Metallic sheen */}
        <path d="M24 20 L22 47 L27 47 L29 20 Z" fill="#ffffff" opacity="0.8" />
        {/* Spout */}
        <polygon points="16,22 8,20 16,30" fill="#94a3b8" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
        {/* Handle */}
        <path d="M44 22 C56 22, 56 46, 44 46" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Lid knob */}
        <rect x="28" y="14" width="8" height="4" rx="2" fill="#0f172a" />
        {/* Red power switch LED */}
        <circle cx="20" cy="46" r="1.5" fill="#ef4444" />
      </svg>
    );
  }

  // 18. Bình nước nhôm / tái sử dụng (Canteen)
  if (key.includes('water_bottle') || key.includes('binh_nuoc') || key.includes('bình nước') || key.includes('binh_tong') || key.includes('canteen')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Screw Cap */}
        <rect x="27" y="6" width="10" height="7" rx="1.5" fill="#71717a" stroke="#3f3f46" strokeWidth="1.5" />
        <line x1="27" y1="9.5" x2="37" y2="9.5" stroke="#a1a1aa" strokeWidth="1" />
        {/* Chain connecting cap */}
        <path d="M37 10 C43 12, 43 17, 38 18" stroke="#a1a1aa" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        {/* Flask Neck */}
        <rect x="29" y="13" width="6" height="4" fill="#a1a1aa" stroke="#3f3f46" strokeWidth="1" />
        {/* Aluminum military flask body */}
        <path
          d="M18 20 C18 16, 46 16, 46 20 L48 48 C48 54, 16 54, 16 48 Z"
          fill="#4b6348"
          stroke="#263824"
          strokeWidth="2.5"
        />
        {/* Webbing harness */}
        <line x1="16" y1="34" x2="48" y2="34" stroke="#263824" strokeWidth="3" />
        <line x1="32" y1="18" x2="32" y2="52" stroke="#263824" strokeWidth="2" />
      </svg>
    );
  }

  // 19. Ô gập nhỏ chống UV
  if (key.includes('umbrella') || key.includes('o_gap') || key.includes('ô') || key.includes('dù')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <rect x="24" y="10" width="16" height="40" rx="6" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
        <rect x="22" y="28" width="20" height="6" rx="2" fill="#334155" />
        <circle cx="32" cy="31" r="1.5" fill="#cbd5e1" />
        <rect x="30" y="6" width="4" height="4" rx="1" fill="#64748b" />
        <rect x="28" y="50" width="8" height="8" rx="2" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />
      </svg>
    );
  }

  // 20. Sạc điện thoại & củ sạc cáp USB
  if (key.includes('charger') || key.includes('sac_dt') || key.includes('sạc')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Wall adapter plug */}
        <rect x="18" y="14" width="28" height="24" rx="5" fill="#f8fafc" stroke="#334155" strokeWidth="2.5" />
        {/* 2 Metal prongs */}
        <rect x="24" y="6" width="4" height="8" fill="#94a3b8" />
        <rect x="36" y="6" width="4" height="8" fill="#94a3b8" />
        {/* USB-C port */}
        <rect x="28" y="32" width="8" height="3" rx="1.5" fill="#0f172a" />
        {/* Coiled cable */}
        <path d="M32 35 C32 44, 18 42, 18 50 C18 56, 46 56, 46 50 C46 44, 38 46, 38 48" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Lightning tip */}
        <rect x="36" y="47" width="5" height="7" rx="1.5" fill="#f8fafc" stroke="#0284c7" strokeWidth="1.2" />
      </svg>
    );
  }

  // 21. Túi văn phòng phẩm nhỏ
  if (key.includes('stationery') || key.includes('van_phong_pham') || key.includes('văn phòng phẩm')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Pencil pouch case */}
        <rect x="12" y="16" width="40" height="32" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
        <line x1="12" y1="24" x2="52" y2="24" stroke="#854d0e" strokeWidth="2" strokeLinecap="round" />
        <circle cx="46" cy="24" r="2" fill="#eab308" />
        {/* Ruler sticking out */}
        <rect x="18" y="28" width="28" height="8" rx="1" fill="#bae6fd" stroke="#0284c7" strokeWidth="1" />
        <line x1="22" y1="28" x2="22" y2="32" stroke="#0369a1" strokeWidth="1" />
        <line x1="26" y1="28" x2="26" y2="34" stroke="#0369a1" strokeWidth="1" />
        <line x1="30" y1="28" x2="30" y2="32" stroke="#0369a1" strokeWidth="1" />
        <line x1="34" y1="28" x2="34" y2="34" stroke="#0369a1" strokeWidth="1" />
        <line x1="38" y1="28" x2="38" y2="32" stroke="#0369a1" strokeWidth="1" />
        {/* Pink eraser */}
        <rect x="20" y="38" width="12" height="6" rx="1.5" fill="#f472b6" stroke="#db2777" strokeWidth="1" />
      </svg>
    );
  }

  // 22. Mì tôm Hảo Hảo
  if (key.includes('noodles') || key.includes('mi_tom') || key.includes('mì')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <rect x="12" y="14" width="40" height="36" rx="4" fill="#dc2626" stroke="#991b1b" strokeWidth="2.5" />
        <ellipse cx="32" cy="32" rx="14" ry="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
        <text x="32" y="30" fill="#dc2626" fontSize="5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
          HẢO HẢO
        </text>
        <text x="32" y="36" fill="#15803d" fontSize="3.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
          Tôm Chua Cay
        </text>
      </svg>
    );
  }

  // 23. Đèn pin siêu sáng
  if (key.includes('flashlight') || key.includes('den_pin') || key.includes('đèn pin')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <polygon points="20,10 44,10 38,24 26,24" fill="#475569" stroke="#1e293b" strokeWidth="2" />
        <ellipse cx="32" cy="10" rx="12" ry="3" fill="#fef08a" stroke="#eab308" strokeWidth="1" />
        <rect x="27" y="24" width="10" height="32" rx="3" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
        <line x1="28" y1="30" x2="36" y2="30" stroke="#475569" strokeWidth="1.5" />
        <line x1="28" y1="35" x2="36" y2="35" stroke="#475569" strokeWidth="1.5" />
        <line x1="28" y1="40" x2="36" y2="40" stroke="#475569" strokeWidth="1.5" />
        <rect x="30" y="46" width="4" height="6" rx="1" fill="#ef4444" />
      </svg>
    );
  }

  // 24. Túi sơ cứu nhỏ
  if (key.includes('first_aid') || key.includes('so_cuu') || key.includes('sơ cứu')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <rect x="10" y="14" width="44" height="38" rx="6" fill="#f8fafc" stroke="#dc2626" strokeWidth="2.5" />
        <rect x="26" y="8" width="12" height="6" rx="2" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
        <rect x="28" y="24" width="8" height="18" fill="#dc2626" rx="1" />
        <rect x="23" y="29" width="18" height="8" fill="#dc2626" rx="1" />
      </svg>
    );
  }

  // ========================================================
  // 3. ĐỒ CỒNG KỀNH (CÂN NHẮC)
  // ========================================================

  // 25. Chú gấu bông lớn
  if (key.includes('teddy_bear') || key.includes('gau_bong') || key.includes('gấu bông')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <circle cx="18" cy="18" r="8" fill="#92400e" stroke="#78350f" strokeWidth="2" />
        <circle cx="18" cy="18" r="4.5" fill="#fde68a" />
        <circle cx="46" cy="18" r="8" fill="#92400e" stroke="#78350f" strokeWidth="2" />
        <circle cx="46" cy="18" r="4.5" fill="#fde68a" />
        <circle cx="32" cy="28" r="18" fill="#b45309" stroke="#78350f" strokeWidth="2.5" />
        <ellipse cx="32" cy="32" rx="8" ry="6" fill="#fde68a" />
        <polygon points="32,30 29,28 35,28" fill="#451a03" />
        <path d="M32 30 V34 M30 34 H34" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="25" cy="25" r="2.2" fill="#1c1917" />
        <circle cx="26" cy="24" r="0.7" fill="#ffffff" />
        <circle cx="39" cy="25" r="2.2" fill="#1c1917" />
        <circle cx="40" cy="24" r="0.7" fill="#ffffff" />
        <polygon points="32,45 24,42 24,48" fill="#dc2626" />
        <polygon points="32,45 40,42 40,48" fill="#dc2626" />
        <circle cx="32" cy="45" r="2.5" fill="#b91c1c" />
        <path d="M22 47 C22 47, 18 58, 32 58 C46 58, 42 47, 42 47 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
        <ellipse cx="32" cy="52" rx="6" ry="4" fill="#fde68a" />
      </svg>
    );
  }

  // 26. Gối ôm dài
  if (key.includes('body_pillow') || key.includes('goi_om') || key.includes('gối ôm')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        <rect x="14" y="10" width="36" height="44" rx="18" fill="#fbcfe8" stroke="#db2777" strokeWidth="2.5" />
        <ellipse cx="32" cy="10" rx="9" ry="4" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
        <ellipse cx="32" cy="54" rx="9" ry="4" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
        <path d="M20 22 C32 26, 32 26, 44 22" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 32 C32 36, 32 36, 44 32" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 42 C32 46, 32 46, 44 42" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 27. Bịch snack to phồng / khổng lồ
  if (key.includes('snack') || key.includes('bim_bim') || key.includes('bánh')) {
    const isGiant = key.includes('khong_lo') || key.includes('giant');
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Puffed foil bag */}
        <path
          d={isGiant ? "M10 8 L54 6 L48 56 L14 58 Z" : "M12 12 L52 10 L48 54 L16 56 Z"}
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Metallic sheen */}
        <path d="M18 14 L26 13 L24 53 L16 54 Z" fill="#fef3c7" opacity="0.6" />
        <line x1="12" y1="14" x2="52" y2="12" stroke="#b45309" strokeWidth="2" strokeDasharray="2 1" />
        <line x1="16" y1="53" x2="48" y2="51" stroke="#b45309" strokeWidth="2" strokeDasharray="2 1" />
        <circle cx="34" cy="34" r="10" fill="#dc2626" />
        <ellipse cx="34" cy="34" rx="6" ry="3.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1" transform="rotate(-20 34 34)" />
        <text x="34" y="47" fill="#ffffff" fontSize="4.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
          {isGiant ? 'MAX JUMBO' : 'CRUNCH'}
        </text>
      </svg>
    );
  }

  // 28. Vài đôi giày phụ
  if (key.includes('extra_shoes') || key.includes('nhieu_giay') || key.includes('giày phụ')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Fashion Sneaker 1 */}
        <g transform="translate(4, 4) rotate(-15 20 20)">
          <path d="M12 16 C16 12, 24 14, 25 22 C26 30, 25 42, 23 48 C22 51, 15 51, 13 48 C11 40, 10 22, 12 16 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
          <path d="M13 18 C16 15, 23 17, 24 23 C19 23, 14 22, 13 18 Z" fill="#ffffff" />
          <line x1="15" y1="28" x2="22" y2="30" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="15" y1="34" x2="22" y2="36" stroke="#ffffff" strokeWidth="1.5" />
        </g>
        {/* Fashion Sneaker 2 */}
        <g transform="translate(18, 8) rotate(15 35 35)">
          <path d="M24 16 C20 12, 12 14, 11 22 C10 30, 11 42, 13 48 C14 51, 21 51, 23 48 C25 40, 26 22, 24 16 Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
          <path d="M23 18 C20 15, 13 17, 12 23 C17 23, 22 22, 23 18 Z" fill="#ffffff" />
          <line x1="21" y1="28" x2="14" y2="30" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="21" y1="34" x2="14" y2="36" stroke="#ffffff" strokeWidth="1.5" />
        </g>
      </svg>
    );
  }

  // 29. Phụ kiện cồng kềnh (Hộp mỹ phẩm trang điểm lớn)
  if (key.includes('fashion_bulky') || key.includes('phu_kien') || key.includes('phụ kiện')) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="10" fill="transparent" />
        {/* Vanity Box */}
        <rect x="12" y="16" width="40" height="36" rx="6" fill="#f43f5e" stroke="#be123c" strokeWidth="2.5" />
        {/* Metallic chrome latch */}
        <rect x="27" y="12" width="10" height="6" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
        <rect x="29" y="30" width="6" height="8" rx="1.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        <circle cx="32" cy="34" r="1.5" fill="#451a03" />
        {/* Decorative corner protectors */}
        <path d="M12 22 V16 H18" stroke="#fbbf24" strokeWidth="2" />
        <path d="M52 22 V16 H46" stroke="#fbbf24" strokeWidth="2" />
        <path d="M12 46 V52 H18" stroke="#fbbf24" strokeWidth="2" />
        <path d="M52 46 V52 H46" stroke="#fbbf24" strokeWidth="2" />
      </svg>
    );
  }

  // ========================================================
  // FALLBACK VECTOR GRAPHIC
  // ========================================================
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="10" fill="transparent" />
      <rect x="12" y="14" width="40" height="38" rx="6" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
      <line x1="12" y1="26" x2="52" y2="26" stroke="#94a3b8" strokeWidth="2" />
      <rect x="28" y="24" width="8" height="6" rx="1" fill="#475569" />
      <circle cx="32" cy="40" r="4" fill="#0284c7" />
    </svg>
  );
};
