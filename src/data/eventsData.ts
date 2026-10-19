import { StoryEvent, RandomPopupEvent } from '../types/game';

// 1. SỰ KIỆN CỐ ĐỊNH (Fixed Schedule Events)
export const FIXED_SCHEDULE_EVENTS: Record<string, StoryEvent> = {
  // Sáng Ngày 1
  'd1_fixed_morning': {
    id: 'd1_fixed_morning',
    day: 1,
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Lịch trình cố định',
    topic: 'arrival_day1',
    title: 'Xuất phát từ ĐH Nhân Văn đến Hola & Nhận quân trang D2',
    narrative: 'Đoàn xe lăn bánh từ ĐH Khoa học Xã hội & Nhân văn đưa các tân binh cập bến Hòa Lạc. Mọi người nhanh chóng xếp hàng vào nhà D2 nhận quân trang gồm: 2 bộ quân phục, sách giáo trình, 1 ghế, và 1 mũ cối có dán nhãn tên cá nhân, nộp tiền ăn sinh hoạt và tìm phòng tập thể.',
    speaker: {
      name: 'Đại đội trưởng D2',
      role: 'Cán bộ chỉ huy',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Chào mừng các đồng chí sinh viên ĐHQGHN đến với Trung tâm GDQP&AN! Nhận quân trang xong khẩn trương về phòng D2 ổn định tổ chức!',
    backgroundType: 'courtyard',
    isMilestone: true,
    isFixedSchedule: true,
    fixedDay: 1,
    fixedPhase: 'morning',
    fixedTimeText: '08:00 - Sáng Ngày 1',
    choices: [
      {
        id: 'd1_f1_c1',
        text: 'Nhanh nhẹn kiểm đếm đủ quân trang, nộp tiền ăn đầy đủ và phụ bạn xách ghế lên phòng',
        attributeEffects: { health: -2, morale: 5, reputation: 8, money: -50000 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        inventoryRewardId: 'binh_nuoc',
        outcomeText: 'Tác phong nhanh nhẹn và nhiệt tình giúp bạn tạo ấn tượng mẫu mực ngay từ giờ đầu tiên tại D2!',
      },
      {
        id: 'd1_f1_c2',
        text: 'Nhận đồ xong chụp vội tấm ảnh check-in cổng D2 rồi cùng Minh về phòng chọn giường',
        attributeEffects: { health: 0, morale: 6, reputation: 4, money: -50000 },
        outcomeText: 'Bức ảnh check-in nhập ngũ Hòa Lạc nhận được bão like từ bạn bè ở nhà. Tinh thần phấn chấn!',
      },
      {
        id: 'd1_f1_c3',
        text: 'Kiểm tra kỹ lưỡng tem dán tên trên mũ cối và xếp ngay ngắn quân trang vào balo trước khi lên tầng',
        attributeEffects: { health: 1, morale: 5, reputation: 6, money: -50000 },
        tipRewardId: 'tip_tranh_phat_tien_quan_trang',
        outcomeText: 'Sự cẩn trọng kiểm tra nhãn tên trên mũ cối giúp bạn hoàn toàn an tâm không lo bị lẫn đồ.',
      },
    ],
  },

  // Trưa Ngày 1: Chọn Giường Tầng (Cố định Ngày 1 duy nhất)
  'd1_fixed_bed_choice': {
    id: 'd1_fixed_bed_choice',
    day: 1,
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Nề nếp & Phòng ở',
    topic: 'dorm_bed',
    title: 'Phân chia giường ngủ phòng 14 người (7 giường tầng)',
    narrative: 'Vừa nhận phòng 14 người cùng các bạn đồng giới, bạn và một bạn nữa cùng nhắm chiếc giường tầng 2 ở vị trí trung tâm thoáng mát gần quạt.',
    speaker: {
      name: 'Bạn cùng phòng',
      role: 'Đồng đội phòng 14 người',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Cậu ơi, chiếc giường tầng 2 này đón trọn gió quạt trần mát quá, mình cũng đang tính chọn giường này...',
    backgroundType: 'dorm',
    isMilestone: true,
    isFixedSchedule: true,
    fixedDay: 1,
    fixedPhase: 'morning',
    fixedTimeText: '10:30 - Trưa Ngày 1',
    choices: [
      {
        id: 'd1_bed_c1',
        text: 'Chủ động nói chuyện chia sẻ, nhường bạn tầng 2 còn mình nhận tầng 1 để tiện đi lại và lấy đồ dưới gầm giường',
        attributeEffects: { reputation: 6, morale: 4 },
        tipRewardId: 'tip_chia_se_giuong_tang',
        outcomeText: 'Sự nhường nhịn và thấu hiểu giúp bạn tạo ấn tượng ấm áp ngay từ ngày đầu, giường tầng 1 hóa ra rất tiện khi lấy ba lô dưới gầm.',
      },
      {
        id: 'd1_bed_c2',
        text: 'Nhanh tay quăng ba lô lên chiếm bằng được chiếc giường tầng 2 trung tâm',
        attributeEffects: { reputation: -6, morale: 2 },
        outcomeText: 'Bạn chiếm được giường tầng 2 ưng ý nhưng khiến bạn cùng phòng hụt hẫng và không khí phòng có chút gượng gạo.',
      },
      {
        id: 'd1_bed_c3',
        text: 'Đề xuất cả phòng bốc thăm vị trí giường ngẫu nhiên cho công bằng, vui vẻ',
        attributeEffects: { reputation: 8, morale: 5 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        outcomeText: 'Sáng kiến bốc thăm dân chủ được cả phòng 14 người tán thành nhiệt liệt trong tiếng cười rôm rả!',
      },
    ],
  },

  // Sáng Ngày 2
  'd2_fixed_morning': {
    id: 'd2_fixed_morning',
    day: 2,
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Lịch trình cố định',
    topic: 'ceremony',
    title: 'Lễ Khai mạc khóa học GDQP&AN tại Sân chào cờ',
    narrative: 'Sáng sớm trong lành mát mẻ đón ánh bình minh mùa hè, toàn thể khóa học tập hợp trang nghiêm tại sân vận động trung tâm. Tiếng Quốc ca vang lên hùng tráng dưới bầu trời Hòa Lạc. Đại diện Trung tâm đọc quyết định khai mạc và quán triệt quy chế kỷ luật thép.',
    speaker: {
      name: 'Đại tá Giám đốc TT',
      role: 'Chỉ huy trưởng',
      avatarId: 'commander',
      mood: 'normal',
    },
    dialogue: 'Rèn luyện kỷ luật là rèn luyện bản lĩnh người trí thức! Chúc các em có một tuần học tập xuất sắc!',
    backgroundType: 'parade',
    isMilestone: true,
    isFixedSchedule: true,
    fixedDay: 2,
    fixedPhase: 'morning',
    fixedTimeText: '07:00 - Sáng Ngày 2',
    choices: [
      {
        id: 'd2_f1_c1',
        text: 'Đứng nghiêm trang từ đầu đến cuối, ghi nhớ 10 điều kỷ luật và điều lệnh chào',
        attributeEffects: { health: -1, morale: 6, reputation: 8, money: 0 },
        tipRewardId: 'tip_ky_luat_gio_giac',
        inventoryRewardId: 'so_tay',
        outcomeText: 'Tác phong trang nghiêm giúp trung đội bạn được cán bộ biểu dương trước toàn khóa!',
      },
      {
        id: 'd2_f1_c2',
        text: 'Hát Quốc ca thật to và dõng dạc hòa cùng các đồng chí trong toàn đại đội dưới sân chào cờ',
        attributeEffects: { health: 0, morale: 8, reputation: 6, money: 0 },
        outcomeText: 'Khí thế hào hùng lan tỏa khắp lồng ngực, cảm giác tự hào và thiêng liêng khó tả.',
      },
      {
        id: 'd2_f1_c3',
        text: 'Giữ hàng ngũ chuẩn xác và quan sát vị trí các khu giảng đường, bãi tập để nắm sơ đồ doanh trại',
        attributeEffects: { health: 0, morale: 5, reputation: 7, money: 0 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        outcomeText: 'Bạn nắm rõ mọi lối đi và sơ đồ doanh trại, giúp cả phòng luôn di chuyển nhanh chóng, chuẩn giờ.',
      },
    ],
  },

  // Chiều Thứ 6 (Ngày 6, 16:30)
  'd6_fixed_afternoon': {
    id: 'd6_fixed_afternoon',
    day: 6,
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Lịch trình cố định',
    topic: 'general_cleaning',
    title: '16:30 Thứ Sáu - Tổng vệ sinh toàn diện doanh trại D2',
    narrative: 'Đúng 16h30 chiều thứ Sáu, toàn đại đội bắt tay vào đợt tổng vệ sinh: quét mạng nhện trần nhà, lau cửa kính, cạo vết bẩn sàn gạch, cọ rửa nhà tắm và sắp xếp giá giày.',
    speaker: {
      name: 'An',
      role: 'Lớp phó kỷ luật',
      avatarId: 'an',
      mood: 'normal',
    },
    dialogue: 'Thầy thông báo tối nay sẽ chấm điểm thi đua tuần! Chúng mình cùng xắn tay áo dọn dẹp thật sạch nhé!',
    backgroundType: 'wash',
    isMilestone: true,
    isFixedSchedule: true,
    fixedDay: 6,
    fixedPhase: 'afternoon',
    fixedTimeText: '16:30 - Chiều Thứ Sáu',
    choices: [
      {
        id: 'd6_f1_c1',
        text: 'Xung phong cọ rửa nhà tắm và lau khô sàn hành lang theo quy chuẩn',
        attributeEffects: { health: -3, morale: 4, reputation: 10, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        inventoryRewardId: 'khan_lau_da_nang',
        outcomeText: 'Phòng bạn đạt điểm A tuyệt đối trong đợt kiểm tra nội vụ chiều thứ Sáu!',
      },
      {
        id: 'd6_f1_c2',
        text: 'Phân loại đồ trên 3 dây phơi và căn thẳng hàng toàn bộ giá giày dép',
        attributeEffects: { health: -1, morale: 5, reputation: 8, money: 0 },
        tipRewardId: 'tip_phan_loai_3_day_phoi',
        outcomeText: 'Giá dép thẳng tắp như kẻ chỉ khiến ban kiểm tra tấm tắc khen ngợi.',
      },
      {
        id: 'd6_f1_c3',
        text: 'Lau chùi cửa sổ, quét mạng nhện trần nhà và dùng khăn ẩm lau sạch bụi các thanh dát giường',
        attributeEffects: { health: -2, morale: 5, reputation: 9, money: 0 },
        outcomeText: 'Căn phòng sáng bóng không một hạt bụi, được chỉ huy chấm điểm xuất sắc!',
      },
    ],
  },

  // Sáng Thứ Bảy / Chủ Nhật (Ngày 7)
  'd7_fixed_morning': {
    id: 'd7_fixed_morning',
    day: 7,
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Lịch trình cố định',
    topic: 'family_visit',
    title: 'Sáng cuối tuần - Đón tiếp người thân & bạn bè lên thăm Hola',
    narrative: 'Sáng cuối tuần, khu vực cổng tiếp dân rộn rã tiếng cười nói. Phụ huynh và bạn bè mang theo đồ ăn vặt, trái cây và những lời động viên ấm áp lên tiếp lửa cho các chiến sĩ.',
    speaker: {
      name: 'Minh',
      role: 'Bạn cùng phòng',
      avatarId: 'minh',
      mood: 'smile',
    },
    dialogue: 'Cậu ơi! Bố mẹ tớ mang lên cho cả phòng một thùng hoa quả và sữa này! Ra sảnh đón người nhà thôi!',
    backgroundType: 'courtyard',
    isMilestone: true,
    isFixedSchedule: true,
    fixedDay: 7,
    fixedPhase: 'morning',
    fixedTimeText: '08:30 - Sáng Cuối Tuần',
    choices: [
      {
        id: 'd7_f1_c1',
        text: 'Tiếp đón gia đình chu đáo, mời người thân vào khu vực đăng ký theo đúng quy định',
        attributeEffects: { health: 4, morale: 12, reputation: 8, money: 20000 },
        inventoryRewardId: 'chuoi_tieu',
        outcomeText: 'Bố mẹ tự hào khi thấy bạn chững chạc, đen giòn và tác phong quân ngũ đĩnh đạc.',
      },
      {
        id: 'd7_f1_c2',
        text: 'Cùng cả phòng bày hoa quả liên hoan vui vẻ tại bàn sinh hoạt chung',
        attributeEffects: { health: 6, morale: 10, reputation: 7, money: 0 },
        outcomeText: 'Bữa tiệc nhỏ rộn rã tiếng cười gắn kết tình bạn giữa các gia đình sinh viên.',
      },
      {
        id: 'd7_f1_c3',
        text: 'Dẫn bố mẹ và người thân đi tham quan sân chào cờ, nhà ăn và khoe chiếc chăn gấp vuông vắn',
        attributeEffects: { health: 3, morale: 14, reputation: 8, money: 10000 },
        outcomeText: 'Bố mẹ xúc động và yên tâm khi thấy con mình sống tự lập, kỷ luật và trưởng thành trong quân ngũ.',
      },
    ],
  },
};

// Các hàm sinh sự kiện Tối khung 20:30 (Sinh hoạt đại đội với các tình huống đa dạng)

export function createLateRollcallAngryTeacherSituation(day: number): StoryEvent {
  return {
    id: `d${day}_2030_tap_trung_muon_thay_mang`,
    day,
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Lịch trình 20:30',
    topic: 'evening_rollcall_late',
    title: `20:30 - Toàn đại đội tập trung muộn 5 phút, Thầy cáu và mắng gay gắt`,
    narrative: `Đúng 20:30, kẻng tập hợp điểm danh vang lên dồn dập, nhưng do một số phòng mải sấy tóc và chưa phân loại xong đồ phơi, đến 20:35 đại đội mới đứng đủ đội hình dưới sân chào cờ. Thầy đại đội trưởng đứng trước hàng quân với nét mặt đanh thép, tiếng còi chấn chỉnh rền vang trong đêm hè Hòa Lạc.`,
    speaker: {
      name: 'Đại đội trưởng D2',
      role: 'Cán bộ chỉ huy',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Các đồng chí coi kỷ luật quân đội là trò đùa đấy à?! Trễ 5 phút trên chiến trường là hy sinh cả đơn vị! Toàn đại đội đứng nghiêm tại chỗ 15 phút, ai nhúc nhích đứng thêm nửa tiếng!',
    backgroundType: 'parade',
    isFixedSchedule: true,
    fixedTimeText: '20:30 - Sinh hoạt đại đội',
    choices: [
      {
        id: `d${day}_ttm_c1`,
        text: 'Đứng nghiêm bất động như tượng đồng, mắt nhìn thẳng, hít thở đều kiên nhẫn chấp hành kỷ luật',
        attributeEffects: { health: -1, morale: -2, reputation: 8, money: 0 },
        tipRewardId: 'tip_sinh_hoat_dai_doi_nghiem_tuc',
        outcomeText: 'Thấy bạn và các hàng đầu đứng nghiêm túc tuyệt đối không hề nao núng, Thầy nguôi giận, hạ lệnh cho đại đội thôi đứng nghiêm và nhắc nhở rút kinh nghiệm sâu sắc.',
      },
      {
        id: `d${day}_ttm_c2`,
        text: 'Đứng hàng sau lén lút lắc lư chân, xì xào cằn nhằn với bạn bên cạnh vì mỏi chân',
        attributeEffects: { health: -3, morale: -8, reputation: -10, money: 0 },
        outcomeText: 'Tiếng xì xào bị cán bộ đi tuần phát hiện! Cả trung đội của bạn bị phạt chống đẩy 20 cái ngay tại sân chào cờ trong đêm hè!',
      },
      {
        id: `d${day}_ttm_c3`,
        text: 'Giữ thế đứng nghiêm, dùng ánh mắt và nhắc khẽ đồng đội xung quanh tập trung không làm Thầy giận thêm',
        attributeEffects: { health: 0, morale: 0, reputation: 7, money: 0 },
        outcomeText: 'Hàng ngũ nhanh chóng im phăng phắc. Sự tự giác của đại đội giúp buổi sinh hoạt chuyển hướng êm đẹp sang dặn dò lịch thao trường sáng mai.',
      },
    ],
  };
}

export function createGroomingInspection2030Situation(day: number): StoryEvent {
  return {
    id: `d${day}_2030_kiem_tra_tac_phong`,
    day,
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Lịch trình 20:30',
    topic: 'evening_rollcall_check',
    title: `20:30 - Kiểm tra đột xuất tác phong quân phục, râu tóc và móng tay`,
    narrative: `Trong giờ sinh hoạt đại đội 20:30, cán bộ bất ngờ lệnh cho các tiểu đội trưởng đi từng hàng rà soát tác phong: kiểm tra xem ai chưa bấm móng tay, tóc tai dài chạm vành tai, hoặc mang dép lê xuống sân điểm danh.`,
    speaker: {
      name: 'Đại đội phó',
      role: 'Cán bộ kiểm tra tác phong',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Tất cả đưa hai bàn tay ra trước ngực! Quân phục cài đủ cúc cổ, đi giày có buộc dây! Ai để móng tay dài hoặc tóc tốt bước lên hàng đầu!',
    backgroundType: 'parade',
    isFixedSchedule: true,
    fixedTimeText: '20:30 - Sinh hoạt đại đội',
    choices: [
      {
        id: `d${day}_kttp_c1`,
        text: 'Tự tin xòe hai bàn tay sạch sẽ đã cắt tỉa gọn gàng, quân phục chỉnh tề tăm tắp',
        attributeEffects: { health: 0, morale: 5, reputation: 8, money: 0 },
        tipRewardId: 'tip_sinh_hoat_dai_doi_nghiem_tuc',
        outcomeText: 'Tác phong chỉn chu mẫu mực giúp bạn được cán bộ kiểm tra chấm điểm A cộng thi đua cho cả phòng 14 người!',
      },
      {
        id: `d${day}_kttp_c2`,
        text: 'Thò tay vào túi áo lục tìm bấm móng tay định cúi đầu bấm lén trong bóng tối',
        attributeEffects: { health: 0, morale: -5, reputation: -8, money: 0 },
        outcomeText: 'Hành động lén lút bị đại đội phó phát hiện ngay lập tức, bị nhắc nhở nghiêm khắc tác phong đối phó trước hàng quân!',
      },
      {
        id: `d${day}_kttp_c3`,
        text: 'Đứng nghiêm báo cáo trung thực nếu chưa kịp cắt móng tay và hứa mượn bấm móng tay cắt ngay sau giờ sinh hoạt',
        attributeEffects: { health: 0, morale: 3, reputation: 5, money: 0 },
        outcomeText: 'Thái độ thẳng thắn, thành khẩn nhận lỗi được cán bộ đánh giá cao, nhắc nhở phòng 14 người đôn đốc hỗ trợ nhau.',
      },
    ],
  };
}

export function createCommendationAndNightGuardSituation(day: number): StoryEvent {
  return {
    id: `d${day}_2030_bieu_duong_va_gac_dem`,
    day,
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Lịch trình 20:30',
    topic: 'evening_rollcall_guard',
    title: `20:30 - Biểu dương phòng kiểu mẫu và phân công ca gác đặc biệt 02:00 sáng`,
    narrative: `Không khí buổi sinh hoạt tối nay lắng đọng khi Thầy công bố điểm chấm nội vụ 3 dây phơi và gấp chăn. Ngay sau đó là thông báo về ca gác rạng sáng từ 02:00 đến 03:30 tại trạm gác cổng doanh trại trong đêm gió lạnh.`,
    speaker: {
      name: 'Đại đội trưởng D2',
      role: 'Cán bộ chỉ huy',
      avatarId: 'commander',
      mood: 'normal',
    },
    dialogue: 'Hôm nay phòng 14 người của các đồng chí thể hiện tinh thần rất tốt! Tuy nhiên đêm nay sương lạnh buốt, ca trực gác 2h sáng ai xung phong nhận nhiệm vụ?',
    backgroundType: 'parade',
    isFixedSchedule: true,
    fixedTimeText: '20:30 - Sinh hoạt đại đội',
    choices: [
      {
        id: `d${day}_bdg_c1`,
        text: 'Mạnh dạn bước lên xung phong nhận ca gác đêm sương gió để rèn luyện bản lĩnh ý chí thép',
        attributeEffects: { health: -2, morale: 6, reputation: 12, money: 0 },
        tipRewardId: 'tip_chap_hanh_lenh_truc_ban',
        outcomeText: 'Sự dũng cảm và tinh thần cống hiến không ngại gian khổ khiến Thầy và các bạn trong đại đội vô cùng nể phục!',
      },
      {
        id: `d${day}_bdg_c2`,
        text: 'Đứng im cúi đầu lảng tránh ánh mắt của Thầy để khỏi bị gọi tên đi gác đêm',
        attributeEffects: { health: 0, morale: -2, reputation: -3, money: 0 },
        outcomeText: 'Bạn tránh được ca gác đêm nhưng cảm thấy hơi áy náy khi thấy bạn cùng phòng phải đi thay.',
      },
      {
        id: `d${day}_bdg_c3`,
        text: 'Đề xuất cùng Minh đăng ký gác theo cặp để hỗ trợ nhau và đảm bảo an toàn tuyệt đối',
        attributeEffects: { health: -1, morale: 5, reputation: 8, money: 0 },
        outcomeText: 'Phương án hợp lý được Thầy chấp thuận ngay, tình đồng chí giữa bạn và Minh thêm gắn kết bền chặt.',
      },
    ],
  };
}

export function createHeartToHeartSharingSituation(day: number): StoryEvent {
  return {
    id: `d${day}_2030_giao_luu_tam_su`,
    day,
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Lịch trình 20:30',
    topic: 'evening_rollcall_share',
    title: `20:30 - Sinh hoạt đại đội giải tỏa tâm lý và lời dặn dò ấm áp của Thầy`,
    narrative: `Sau những ngày đầu kỷ luật thép đầy bỡ ngỡ, Thầy đại đội trưởng cho đại đội ngồi quây quần trên những chiếc ghế nhựa dưới bầu trời đêm Hòa Lạc để trò chuyện, hỏi thăm tâm tư tình cảm từng phòng 14 người.`,
    speaker: {
      name: 'Đại đội trưởng D2',
      role: 'Cán bộ chỉ huy',
      avatarId: 'commander',
      mood: 'normal',
    },
    dialogue: 'Học quân sự vất vả nhưng là kỷ niệm đời sinh viên! Có ai nhớ nhà quá hay gặp khó khăn gì trong nếp sống tập thể không, cứ mạnh dạn chia sẻ với Thầy!',
    backgroundType: 'courtyard',
    isFixedSchedule: true,
    fixedTimeText: '20:30 - Sinh hoạt đại đội',
    choices: [
      {
        id: `d${day}_glts_c1`,
        text: 'Mạnh dạn đứng lên chia sẻ cảm nghĩ thật lòng và cảm ơn Thầy cùng các bạn đã giúp đỡ',
        attributeEffects: { health: 0, morale: 10, reputation: 8, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Lời tâm sự chân thành chạm đến trái tim cả đại đội, tiếng vỗ tay ròn rã làm ấm cả đêm đồi Hòa Lạc.',
      },
      {
        id: `d${day}_glts_c2`,
        text: 'Xung phong hát một bài acoustic mộc mạc tặng Thầy và cả đại đội',
        attributeEffects: { health: 0, morale: 12, reputation: 10, money: 0 },
        outcomeText: 'Giai điệu thân thương vang lên, cả đại đội cùng vỗ tay hát theo tạo nên một kỷ niệm khó quên.',
      },
      {
        id: `d${day}_glts_c3`,
        text: 'Ngồi lắng nghe những chia sẻ của đồng đội và vỗ tay hưởng ứng nhiệt tình',
        attributeEffects: { health: 0, morale: 7, reputation: 5, money: 0 },
        outcomeText: 'Khoảnh khắc đoàn kết giúp bạn cảm nhận sâu sắc tình đồng chí quân ngũ thiêng liêng.',
      },
    ],
  };
}

export function createStandardRollcallSituation(day: number): StoryEvent {
  return {
    id: `d${day}_fixed_evening`,
    day,
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Lịch trình 20:30',
    topic: 'evening_rollcall',
    title: `20:30 - Sinh hoạt đại đội & Điểm danh buổi tối (Ngày ${day})`,
    narrative: `Đúng 20:30, toàn đại đội tập trung tại sân chào cờ. Đại đội trưởng nhận xét nội vụ trong ngày, biểu dương các phòng sạch sẽ, nhắc nhở các vi phạm và giao ban lịch trình sáng mai.`,
    speaker: {
      name: 'Đại đội trưởng D2',
      role: 'Cán bộ chỉ huy',
      avatarId: 'commander',
      mood: 'normal',
    },
    dialogue: 'Các đồng chí đứng nghiêm! Nhìn chung nội vụ hôm nay có tiến bộ, tuy nhiên một số phòng phơi đồ chưa đúng 3 dây thép. Đêm nay duy trì gác đúng giờ!',
    backgroundType: 'parade',
    isFixedSchedule: true,
    fixedTimeText: '20:30 - Mỗi tối',
    choices: [
      {
        id: `d${day}_fe_c1`,
        text: 'Mặc quân phục chỉnh tề, đứng nghiêm túc, hô to "Có!" dõng dạc khi điểm danh',
        attributeEffects: { health: 0, morale: 4, reputation: 6, money: 0 },
        tipRewardId: 'tip_sinh_hoat_dai_doi_nghiem_tuc',
        outcomeText: 'Tác phong chuẩn mực giúp tiểu đội bạn giữ vững vị trí dẫn đầu phong trào thi đua!',
      },
      {
        id: `d${day}_fe_c2`,
        text: 'Lắng nghe kỹ nhắc nhở của chỉ huy và ghi chép lại lịch trực gác vào sổ tay',
        attributeEffects: { health: 0, morale: 3, reputation: 5, money: 0 },
        outcomeText: 'Sự cẩn thận giúp phòng bạn luôn chủ động, không bao giờ bị động trước hiệu lệnh sáng mai.',
      },
      {
        id: `d${day}_fe_c3`,
        text: 'Góp ý nhẹ nhàng cho đồng đội đứng cạnh chỉnh lại cúc áo và quai mũ cối cho đúng điều lệnh',
        attributeEffects: { health: 0, morale: 4, reputation: 6, money: 0 },
        outcomeText: 'Tinh thần tương trợ đồng đội giúp cả hàng ngũ đứng thẳng tắp, không ai bị trừ điểm tác phong.',
      },
    ],
  };
}

// Hàm sinh sự kiện Tối 20:30 linh hoạt theo ngày
export function createFixedEveningRollcall(day: number): StoryEvent {
  if (day === 2 || day === 3) {
    // Tình huống yêu cầu: Tập trung muộn, Thầy cáu và mắng gay gắt
    return createLateRollcallAngryTeacherSituation(day);
  } else if (day === 4) {
    // Kiểm tra đột xuất móng tay, râu tóc, tác phong
    return createGroomingInspection2030Situation(day);
  } else if (day === 5) {
    // Biểu dương và phân công ca gác đặc biệt 02:00 sáng
    return createCommendationAndNightGuardSituation(day);
  } else if (day === 7) {
    // Giao lưu tâm sự tân binh đêm cuối tuần
    return createHeartToHeartSharingSituation(day);
  }
  // Mặc định Ngày 1 hoặc các ngày khác: Điểm danh chuẩn mực
  return createStandardRollcallSituation(day);
}

// 2. KHO TÌNH HUỐNG THƯỜNG NHẬT (Phân loại theo buổi Sáng - Chiều - Tối)
export const MORNING_SITUATIONS: StoryEvent[] = [
  {
    id: 'm_quy_chuan_do_tren_giuong',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Nề nếp & Kỷ luật',
    topic: 'bed_standard',
    title: 'Quy chuẩn đồ trên giường & Quạt cá nhân',
    narrative: 'Kiểm tra nội vụ sáng, bạn phát hiện trên giường mình vẫn còn chiếc quạt mini, lọ sáp môi và cuốn sổ tay.',
    speaker: {
      name: 'Bạn cùng phòng',
      role: 'Đồng đội phòng 14 người',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Cậu ơi mau cất đồ đi! Trên giường tuyệt đối chỉ được để chăn gối và quạt cá nhân quay lồng ra ngoài thôi!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'm_qcd_c1',
        text: 'Nhét toàn bộ sổ tay, mỹ phẩm xuống gầm giường trong ba lô cá nhân; đặt quạt ở cuối giường, quay lồng ra phía ngoài gọn gàng',
        attributeEffects: { reputation: 7, morale: 4 },
        tipRewardId: 'tip_quy_chuan_do_tren_giuong',
        outcomeText: 'Phản giường phẳng lì sạch bong, quạt quay đúng quy cách giúp phòng bạn đạt điểm A nội vụ sáng!',
      },
      {
        id: 'm_qcd_c2',
        text: 'Để nguyên quạt ở đầu giường cắm sạc, gom sổ và đồ lặt vặt nhét đại dưới mép chăn',
        attributeEffects: { reputation: -8, morale: -5 },
        outcomeText: 'Trực ban lật mép chăn lên phát hiện ngay đống đồ lộn xộn, bị nhắc nhở gay gắt trước toàn đại đội.',
      },
      {
        id: 'm_qcd_c3',
        text: 'Tiện tay nhét hết tất cả vào gối rồi kéo khóa lại',
        attributeEffects: { reputation: -6, morale: -3 },
        outcomeText: 'Chiếc gối cộm lên méo mó dị thường khiến người kiểm tra phát hiện ngay mánh khóe đối phó.',
      },
    ],
  },
  {
    id: 'truc_ban_tieu_doi',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'military_duty',
    topic: 'duty_team',
    title: 'Kíp trực ban tiểu đội & Báo cháo bạn ốm',
    narrative: 'Bạn trong kíp trực ban (từ 16h30 hôm trước đến 16h30 hôm nay), sáng ra vừa phải quét hành lang vừa phải đi các phòng gom danh sách báo cháo cho bạn ốm trước giờ ăn.',
    speaker: {
      name: 'Tiểu đội trưởng',
      role: 'Trưởng kíp trực ban',
      avatarId: 'commander',
      mood: 'normal',
    },
    dialogue: 'Sắp đến giờ nhà ăn phát cháo rồi! Phải gom danh sách bạn ốm xuống xin giấy trạm y tế gấp nhé!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'tbt_c1',
        text: 'Dậy sớm trước báo thức 10 phút, phân công 1 bạn quét hành lang, bạn còn lại cùng mình cầm sổ đi từng phòng xác nhận danh sách rồi xuống y tế xin giấy',
        attributeEffects: { reputation: 12, morale: 6, health: -4 },
        tipRewardId: 'tip_chap_hanh_lenh_truc_ban',
        outcomeText: 'Tác phong chỉn chu khoa học giúp các bạn ốm được nhận cháo nóng đúng giờ, hành lang sạch bóng được chỉ huy khen ngợi!',
      },
      {
        id: 'tbt_c2',
        text: 'Quét vội hành lang rồi quên bẵng việc báo cháo, sát giờ ăn mới cuống cuồng chạy xuống bếp',
        attributeEffects: { reputation: -10, morale: -6 },
        outcomeText: 'Nhà bếp hết suất cháo dự phòng vì báo muộn, bạn phải xin lỗi các bạn ốm trong sự áy náy khôn nguôi.',
      },
      {
        id: 'tbt_c3',
        text: 'Đùn đẩy việc ghi sổ báo cháo cho tiểu đội trưởng để mình chỉ làm việc nhẹ là mở rèm nhà ăn',
        attributeEffects: { reputation: -6, morale: -2, health: 2 },
        outcomeText: 'Thái độ trốn tránh việc khó làm đồng đội trực ban khó chịu, làm giảm sút uy tín cá nhân.',
      },
    ],
  },
  {
    id: 've_sinh_khu_vuc_dai_doi',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'military_duty',
    topic: 'area_cleaning',
    title: 'Vệ sinh khu vực đại đội sân trước D2 (Miễn chạy dài)',
    narrative: '05:30 sáng theo tiếng còi toàn khung D2, tổ của bạn được phân công làm vệ sinh khu vực sân trước khung nhà D2 cùng đại đội (được miễn chạy dài thể dục buổi sáng). Nhà kho rất thiếu hót rác nên phải chủ động chuẩn bị.',
    speaker: {
      name: 'Bạn cùng phòng',
      role: 'Tổ trực khu vực',
      avatarId: 'roommate',
      mood: 'normal',
    },
    dialogue: 'Hôm nay được miễn chạy dài 1500m sướng thật, nhưng nghe nói kho hết sạch hót rác rồi đấy!',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'vskv_c1',
        text: 'Nhớ lời dặn, chủ động cầm sẵn hót rác của phòng mình và xin thêm túi rác ở phòng giặt mang xuống hiện trường cùng chổi',
        attributeEffects: { reputation: 8, morale: 5, health: 2 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Sự chu đáo giúp tổ của bạn thu dọn sạch sẽ lá rụng trong nháy mắt, vừa thảnh thơi vừa được miễn chạy dài!',
      },
      {
        id: 'vskv_c2',
        text: 'Chỉ cầm tay không xuống nhà kho lấy chổi, đến nơi hết sạch hót rác đành phải dùng bìa carton vun lá cây mất thời gian',
        attributeEffects: { reputation: -4, morale: -4 },
        outcomeText: 'Bìa carton rách nát làm lá bay tứ tung, quét mãi không xong khiến bạn trễ cả giờ ăn sáng.',
      },
      {
        id: 'vskv_c3',
        text: 'Tranh thủ quét qua loa vài đường rồi lẩn vào góc căng-tin ngồi nghỉ chờ các bạn làm xong',
        attributeEffects: { reputation: -8, morale: -2, health: 4 },
        outcomeText: 'Hành vi trốn việc bị cán bộ kiểm tra bắt gặp, cả tổ bị phê bình và phạt trực nhật bù thêm 2 buổi chiều!',
      },
    ],
  },
  {
    id: 'm_danh_dau_quan_phuc',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Quản lý đồ dùng',
    topic: 'uniform',
    title: 'Đánh dấu nhận diện 2 bộ quân trang màu xanh',
    narrative: 'Cầm trên tay 2 bộ quần áo dã chiến màu xanh giống hệt của mọi người, nguy cơ thất lạc khi giặt và phơi chung trên 3 dây phơi thép ngoài ban công phòng là rất cao.',
    speaker: {
      name: 'An',
      role: 'Lớp phó',
      avatarId: 'an',
      mood: 'smile',
    },
    dialogue: 'Đừng lấy bút lông viết to lên áo nhé, vừa mất thẩm mỹ vừa bị thầy phạt đền tiền đấy!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'm_dd_c1',
        text: 'Dùng bút bi kẹp một sợi chỉ màu nhỏ ở mác áo để nhận diện, tuyệt đối không viết vẽ lên vải',
        attributeEffects: { health: 0, morale: 4, reputation: 6, money: 0 },
        tipRewardId: 'tip_tranh_phat_tien_quan_trang',
        inventoryRewardId: 'bo_kim_chi_mini',
        outcomeText: 'Cách đánh dấu thông minh, tinh tế giúp đồ của bạn không bao giờ bị lẫn mà quân phục vẫn nguyên vẹn.',
      },
      {
        id: 'm_dd_c2',
        text: 'Lấy bút lông dầu viết tên thật to trước ngực áo cho đỡ lẫn',
        attributeEffects: { health: 0, morale: -4, reputation: -8, money: -50000 },
        outcomeText: 'Đại đội trưởng kiểm tra nhìn thấy và phê bình gay gắt tác phong làm hỏng quân trang, bị phạt đền tiền áo!',
      },
      {
        id: 'm_dd_c3',
        text: 'Dùng chỉ đỏ thêu một dấu chấm nhỏ kín đáo ở mặt trong gấu áo',
        attributeEffects: { health: 0, morale: 5, reputation: 7, money: 0 },
        outcomeText: 'Cách nhận diện cực kỳ khéo léo và thẩm mỹ, bạn cùng phòng phải học tập theo bạn ngay.',
      },
    ],
  },
  {
    id: 'm_coi_bao_thuc',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Kỷ luật & Tác phong',
    topic: 'wakeup',
    title: 'Tiếng còi báo thức 05:30 toàn D2',
    narrative: 'Đúng 05:30, tiếng còi báo thức toàn D2 vang lên xé tan màn sương sớm Hòa Lạc. Cả phòng chỉ có 10 phút để vệ sinh, gấp chăn màn và xếp hàng dưới sân.',
    speaker: {
      name: 'Huy',
      role: 'Bạn cùng phòng',
      avatarId: 'huy',
      mood: 'worried',
    },
    dialogue: 'Trời ơi mới 5h30 mà lạnh quá! Cậu đã dậy chưa, kéo tớ dậy với!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'm_cbt_c1',
        text: 'Bật dậy ngay lập tức, gập màn và gọi các bạn cùng phòng cùng dậy chia việc dọn nội vụ',
        attributeEffects: { health: 2, morale: 4, reputation: 6, money: 0 },
        tipRewardId: 'tip_chuan_bi_tu_toi_hom_truoc',
        outcomeText: 'Nhờ sự chủ động của bạn, phòng bạn là đơn vị đầu tiên xếp hàng tề chỉnh dưới sân trước giờ G.',
      },
      {
        id: 'm_cbt_c2',
        text: 'Nằm nấn ná trên giường đến 6h rồi cuống cuồng chạy thục mạng ra sân',
        attributeEffects: { health: -3, morale: -4, reputation: -6, money: 0 },
        outcomeText: 'Bị ghi tên vào sổ trực ban vì chậm giờ tập trung, chăn màn trong phòng chưa kịp gấp bị nhắc nhở.',
      },
      {
        id: 'm_cbt_c3',
        text: 'Dậy từ 5h15 trước kẻng 15 phút để đánh răng rửa mặt thong thả trước khi còi hú',
        attributeEffects: { health: 3, morale: 5, reputation: 7, money: 0 },
        outcomeText: 'Tác phong "đi trước một bước" giúp bạn không phải chen chúc bồn rửa và chỉnh tề trước mọi người!',
      },
    ],
  },
  {
    id: 'm_gap_chan_vuong_vuc',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Nề nếp & Kỷ luật',
    topic: 'blanket_neat',
    title: 'Cách gấp chăn màn vuông vức 4 góc',
    narrative: 'Chăn và màn gấp sẵn được nắn vuốt mép bằng bìa/thước dài sao cho phẳng phiu, vuông vức 4 góc đặt ngay ngắn ở đầu giường. Gấp ẩu sẽ bị phạt trưa xuống phòng học gấp lại.',
    speaker: {
      name: 'Linh',
      role: 'Bạn học phòng 14 người',
      avatarId: 'linh',
      mood: 'normal',
    },
    dialogue: 'Cậu ơi lấy thước kẻ dài hoặc tấm bìa cứng miết mép chăn này! Gấp ẩu là trưa bị gọi tên xuống phòng học gấp lại đấy!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'm_gcvv_c1',
        text: 'Dùng mép thước dài miết phẳng từng đường gấp, nắn 4 góc vuông vức sắc sảo rồi đặt ngay ngắn ở đầu giường',
        attributeEffects: { reputation: 8, morale: 5, health: 0 },
        tipRewardId: 'tip_gap_chan_con_lon',
        outcomeText: 'Chiếc chăn vuông vức phẳng lì như viên gạch, được tiểu đội trực ban chấm điểm tối đa trong đợt kiểm tra sáng!',
      },
      {
        id: 'm_gcvv_c2',
        text: 'Gấp qua loa vội vàng cho xong rồi chạy ra sân, chăn méo mó phồng to tướng',
        attributeEffects: { reputation: -8, morale: -5, health: -2 },
        outcomeText: 'Trưa nắng chang chang bị gọi tên phạt xuống phòng học gấp lại chăn 3 lần, mất luôn giấc ngủ trưa quý báu!',
      },
      {
        id: 'm_gcvv_c3',
        text: 'Nhờ bạn khéo tay trong phòng phụ giữ mép để mình vuốt phẳng 4 góc chăn',
        attributeEffects: { reputation: 6, morale: 6, health: 1 },
        outcomeText: 'Sự hợp lực nhịp nhàng giúp chăn màn của cả hai đều phẳng phiu, tình bạn trong phòng 14 người thêm gắn kết.',
      },
    ],
  },
  {
    id: 'm_chieu_coi_ngan',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Nề nếp & Phòng ở',
    topic: 'dorm_bed',
    title: 'Chiếc chiếu cói ngắn hơn phản gỗ',
    narrative: 'Chiếc chiếu cói được phát hơi ngắn so với chiều dài của chiếc phản gỗ giường tầng. Nếu kéo bừa bãi sẽ bị lệch chuẩn nội vụ.',
    speaker: {
      name: 'An',
      role: 'Lớp phó',
      avatarId: 'an',
      mood: 'normal',
    },
    dialogue: 'Nhìn mẫu phòng mẫu đi cậu, chiếu ngắn thì mép chân phải bằng phẳng với mép phản nhé!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'm_ccn_c1',
        text: 'Kéo mép chiếu bằng phẳng với mép phản phía dưới chân, để hở khoảng trống phía đầu giường theo mẫu',
        attributeEffects: { health: 1, morale: 2, reputation: 5, money: 0 },
        tipRewardId: 'tip_trai_chieu_dung_mau',
        outcomeText: 'Chiếu phẳng phiu tăm tắp, đúng quy chuẩn quân đội khiến giường ngủ trông gọn gàng hẳn.',
      },
      {
        id: 'm_ccn_c2',
        text: 'Kéo chiếu phủ kín đầu giường làm mép dưới chân bị hụt một khoảng nham nhở',
        attributeEffects: { health: 0, morale: -1, reputation: -3, money: 0 },
        outcomeText: 'Trực ban chấm điểm nhắc nhở vì chiếu bị xô lệch, không đồng bộ với cả dãy giường.',
      },
      {
        id: 'm_ccn_c3',
        text: 'Kéo căng bốn góc chiếu và dắt nhẹ mép thừa vào khe giường để chiếu không bị xô lệch khi nằm',
        attributeEffects: { health: 0, morale: 4, reputation: 5, money: 0 },
        outcomeText: 'Mặt chiếu căng phẳng như mặt trống, dù trở mình cũng không hề bị nhăn nhúm.',
      },
    ],
  },
  {
    id: 'm_an_sang_banh_mi',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Ăn uống & Sức khỏe',
    topic: 'breakfast',
    title: 'Bữa sáng nhận tại nhà ăn: Bánh mì ruột đặc và hộp sữa tiệt trùng',
    narrative: '06:10 sáng sau giờ thể dục, cả phòng cử đại diện đi nhận suất ăn sáng từ nhà ăn về phòng: mỗi người nhận một ổ bánh mì ruột đặc đóng gói, xúc xích tiệt trùng ăn liền và 1 hộp sữa tươi.',
    speaker: {
      name: 'Minh',
      role: 'Bạn cùng phòng',
      avatarId: 'minh',
      mood: 'worried',
    },
    dialogue: 'Suất bánh mì đóng gói hơi khô một chút nhưng cố ăn hết nhé cậu, tí nữa đứng nắng 3 tiếng ngoài thao trường đói lả đấy!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'm_as_c1',
        text: 'Ăn hết phần bánh mì cùng xúc xích ăn liền và uống hộp sữa để nạp đầy năng lượng luyện tập',
        attributeEffects: { health: 10, morale: 3, reputation: 2, money: 0 },
        tipRewardId: 'tip_an_sang_du_nang_luong',
        inventoryRewardId: 'sua_hop',
        outcomeText: 'Bụng no ấm giúp bạn đứng vững vàng suốt 3 tiếng điều lệnh dưới trời nắng mà không hề hoa mắt.',
      },
      {
        id: 'm_as_c2',
        text: 'Chê bánh mì khô khan, vứt vào sọt rác để bụng đói ra thao trường tập luyện',
        attributeEffects: { health: -25, morale: -8, reputation: -4, money: 0 },
        outcomeText: 'Đến 08:30 đứng tập dưới nắng, bạn bị hoa mắt chóng mặt vì tụt đường huyết và phải vào phòng y tế nằm nghỉ!',
      },
      {
        id: 'm_as_c3',
        text: 'Bẻ nhỏ bánh mì chấm cùng sữa tươi và ăn kèm xúc xích cho dễ nuốt, hấp thu trọn vẹn dinh dưỡng',
        attributeEffects: { health: 8, morale: 5, reputation: 2, money: 0 },
        outcomeText: 'Cách ăn sáng khéo léo giúp bữa ăn nhanh gọn, bổ sung năng lượng dồi dào cho buổi tập.',
      },
    ],
  },
  {
    id: 'm_banh_te_banh_nep',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Ăn uống & Sức khỏe',
    topic: 'breakfast',
    title: 'Suất ăn sáng bánh tẻ và bánh nếp',
    narrative: 'Sáng nay mỗi bạn có 1 chiếc bánh tẻ và 1 chiếc bánh nếp. Hai bạn cùng phòng không thích ăn đồ nếp nên bảo bạn ăn hộ nếu muốn.',
    speaker: {
      name: 'Huy',
      role: 'Bạn cùng phòng',
      avatarId: 'huy',
      mood: 'laugh',
    },
    dialogue: 'Tớ nhường cậu cả 2 cái bánh nếp này đấy, ăn nhiều cho khỏe bắp chân nhé!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'm_bt_c1',
        text: 'Chỉ ăn vừa đủ phần của mình cung cấp năng lượng, khuyên các bạn nên ăn lót dạ',
        attributeEffects: { health: 6, morale: 4, reputation: 4, money: 0 },
        tipRewardId: 'tip_khong_lang_phi_thuc_an',
        outcomeText: 'Cơ thể nhẹ nhàng, tiêu hóa êm ái, sẵn sàng cho những bài tập thể lực dẻo dai.',
      },
      {
        id: 'm_bt_c2',
        text: 'Ăn cả 2 chiếc bánh nếp của bạn, tổng cộng ăn 4 chiếc bánh nhiều dầu mỡ',
        attributeEffects: { health: -8, morale: -4, reputation: 0, money: 0 },
        outcomeText: 'Bụng đầy hơi ậm ạch vì ăn quá nhiều đồ nếp dầu mỡ lúc sáng sớm, chạy nhảy tập luyện rất khó chịu!',
      },
      {
        id: 'm_bt_c3',
        text: 'Gói chiếc bánh nếp thừa vào giấy ăn sạch mang theo balo để dành đến giờ giải lao 9h',
        attributeEffects: { health: 5, morale: 5, reputation: 2, money: 0 },
        outcomeText: 'Đến giữa giờ tập luyện khi mọi người bắt đầu đói cồn cào, chiếc bánh nếp trở thành "cứu tinh" tuyệt vời.',
      },
    ],
  },
  {
    id: 'm_hanh_quan_len_lop',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Điều lệnh & Đội ngũ',
    topic: 'formation',
    title: 'Đúng 06:40 hành quân lên khu giảng đường',
    narrative: 'Đúng 06:40, toàn đại đội tập hợp trước sân D2 để hành quân thành hàng ngũ lên khu giảng đường trên đồi.',
    speaker: {
      name: 'Đại đội phó',
      role: 'Cán bộ dẫn quân',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Các trung đội gióng hàng! Đi đều bước! Một! Hai! Giữ cự ly 2 bước chân!',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'm_hq_c1',
        text: 'Đứng đúng cự ly hàng dọc, bước đều theo khẩu lệnh chỉ huy, không nói chuyện riêng',
        attributeEffects: { health: 2, morale: 3, reputation: 6, money: 0 },
        tipRewardId: 'tip_ky_luat_gio_giac',
        outcomeText: 'Khối hành quân đi đều tăm tắp như một bức tường thép, được chỉ huy khen ngợi tác phong nghiêm trang.',
      },
      {
        id: 'm_hq_c2',
        text: 'Vừa đi vừa cầm gương mini soi và tách hàng ghé quán mua nước ngọt',
        attributeEffects: { health: -1, morale: -2, reputation: -8, money: -15000 },
        outcomeText: 'Bị đại đội phó thổi còi bắt đứng lại nhắc nhở tác phong tùy tiện trước hàng quân!',
      },
      {
        id: 'm_hq_c3',
        text: 'Tập trung bắt nhịp bước chân cùng bạn đi trước, nhắc khẽ bạn đi sau không giẫm gót giày',
        attributeEffects: { health: 1, morale: 4, reputation: 5, money: 0 },
        outcomeText: 'Hàng ngũ chuyển động nhịp nhàng, tạo nên một đội hình hành quân chuẩn mực.',
      },
    ],
  },
  {
    id: 'm_tap_the_duc_0545',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Thể lực & Buổi sáng',
    topic: 'exercise',
    title: '05:30 Báo thức theo tiếng còi toàn khung D2 & Thể dục sáng',
    narrative: '05:30 đúng, tiếng còi báo thức vang rền toàn khung D2. Cả đại đội nhanh chóng tập trung dưới sân chào cờ: các bạn trực nhật vệ sinh khu vực thì được miễn chạy dài, số còn lại dàn hàng ngang 3 bước cự ly tập thể dục tay không và chạy rèn thể lực.',
    speaker: {
      name: 'Đại đội phó',
      role: 'Cán bộ huấn luyện',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Toàn đại đội dóng hàng thẳng tắp! Các đồng chí không trực nhật vệ sinh khu vực chuẩn bị tập thể dục tay không và chạy dài!',
    backgroundType: 'parade',
    choices: [
      {
        id: 'm_ttd_c1',
        text: 'Hít thở sâu không khí trong lành, tập hết biên độ động tác và chạy đều bước theo nhịp còi',
        attributeEffects: { health: 5, morale: 4, reputation: 4, money: 0 },
        tipRewardId: 'tip_an_sang_du_nang_luong',
        outcomeText: 'Máu huyết lưu thông sảng khoái, mọi cơn buồn ngủ tan biến sạch sẽ!',
      },
      {
        id: 'm_ttd_c2',
        text: 'Tập uể oải, vung tay cho có lệ vì thấy sáng sớm gió lạnh',
        attributeEffects: { health: 0, morale: -2, reputation: -4, money: 0 },
        outcomeText: 'Bị cán bộ chỉ huy gọi tên chấn chỉnh tác phong trước toàn hàng quân đại đội.',
      },
      {
        id: 'm_ttd_c3',
        text: 'Nhận nhiệm vụ trong tổ trực nhật vệ sinh sân trước D2, quét dọn sạch lá rụng và được miễn chạy dài',
        attributeEffects: { health: 2, morale: 5, reputation: 5, money: 0 },
        tipRewardId: 'tip_the_duc_buoi_sang',
        outcomeText: 'Quét dọn sạch sẽ tinh tươm sân đại đội trong khi được thảnh thơi miễn chạy dài 1500m!',
      },
    ],
  },
  {
    id: 'm_truc_nhat_phong',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Vệ sinh & Nề nếp',
    topic: 'cleaning',
    title: 'Phiên trực nhật quét dọn hành lang và cầu thang',
    narrative: 'Sáng nay đến lượt phòng bạn cử người đi quét sạch hành lang chung và đổ rác tầng 2.',
    speaker: {
      name: 'An',
      role: 'Lớp phó',
      avatarId: 'an',
      mood: 'normal',
    },
    dialogue: 'Hôm nay phòng mình trực nhật tầng, ai xung phong cầm chổi quét sảnh nào?',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'm_tnp_c1',
        text: 'Xung phong cầm chổi quét sạch hành lang và thu gom rác đúng nơi quy định',
        attributeEffects: { health: 1, morale: 3, reputation: 8, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Hành lang sạch bong kin kít, trực ban chấm điểm tối đa cho tầng của bạn.',
      },
      {
        id: 'm_tnp_c2',
        text: 'Đùn đẩy việc cho bạn khác vì ngại bẩn tay',
        attributeEffects: { health: 0, morale: -4, reputation: -7, money: 0 },
        outcomeText: 'Các bạn trong phòng tỏ thái độ bất bình vì tính lười nhác thiếu tập thể.',
      },
      {
        id: 'm_tnp_c3',
        text: 'Phân chia mỗi người một đoạn hành lang, cùng làm 5 phút là sạch bóng',
        attributeEffects: { health: 1, morale: 5, reputation: 7, money: 0 },
        outcomeText: 'Cách tổ chức làm việc nhóm khoa học giúp công việc hoàn thành nhanh gọn trong tiếng cười vui vẻ.',
      },
    ],
  },
  {
    id: 'm_sjc_tui_tote',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'sjc_item_event',
    topic: 'sjc_tote',
    title: '[SÁNG] Nhiều đồ & Túi tote thần kỳ SJC',
    narrative: 'Các buổi đi học, bạn vừa phải mang giáo trình Quốc phòng, sổ tay, bình nước, kem chống nắng, ô. Tay ôm nách tha rất dễ rơi rớt giữa đường.',
    speaker: {
      name: 'Minh',
      role: 'Bạn cùng phòng',
      avatarId: 'minh',
      mood: 'worried',
    },
    dialogue: 'Nhiều sách vở tài liệu với bình nước thế này ôm sao hết cậu ơi, khéo rơi dọc đường dốc mất!',
    backgroundType: 'dorm',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'm_sjc_tt_c1',
        text: 'Nhét tất cả giáo trình, sổ tay và đồ cá nhân gọn gàng vào chiếc Túi tote thần kỳ SJC rồi khoác lên vai',
        attributeEffects: { health: 2, morale: 5, reputation: 6, money: 0 },
        tipRewardId: 'tip_chuan_bi_tu_toi_hom_truoc',
        inventoryRewardId: 'sjc_tui_tote',
        outcomeText: 'Chiếc túi tote canvas SJC bền bỉ, phong cách giúp bạn mang trọn tài liệu mà hai tay vẫn tự do, tác phong nhanh nhẹn và tự tin!',
      },
      {
        id: 'm_sjc_tt_c2',
        text: 'Tay ôm chồng sổ sách lỉnh kỉnh vội vã chạy theo đoàn, bị trượt tay rơi đồ và đi chậm so với đại đội',
        attributeEffects: { health: -2, morale: -4, reputation: -3, money: 0 },
        outcomeText: 'Sách vở rơi lả tả xuống đường nhựa, bạn phải dừng lại nhặt khiến cả trung đội phải chờ đợi nhắc nhở.',
      },
      {
        id: 'm_sjc_tt_c3',
        text: 'Nhét tạm vài cuốn sách vào lưng quần quân phục và nhờ bạn cùng phòng cầm hộ bình nước, vừa đi vừa lo rơi',
        attributeEffects: { health: 0, morale: -2, reputation: -1, money: 0 },
        outcomeText: 'Dáng đi gượng gạo làm nhăn mép giáo trình, vừa đi vừa lo lắng nhưng may mắn không bị rơi đồ giữa đường.',
      },
    ],
  },
  {
    id: 'm_sjc_co_dong_hoc',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'sjc_item_event',
    topic: 'sjc_mobile_study',
    title: '[SÁNG] Tác phong cơ động & Túi tote SJC chuyển lớp học',
    narrative: '06:45 sáng, lệnh chuyển phòng học sang giảng đường trên đồi phát ra đột xuất, chỉ có 5 phút chuẩn bị toàn bộ đồ dùng học tập và tài liệu.',
    speaker: {
      name: 'An',
      role: 'Lớp phó',
      avatarId: 'an',
      mood: 'smile',
    },
    dialogue: 'Đại đội chuyển địa điểm học lên giảng đường đồi cao! 5 phút nữa tập trung dưới sảnh nhé cả phòng 14 người!',
    backgroundType: 'dorm',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'm_sjc_cdh_c1',
        text: 'Mở Túi tote SJC đa năng, bỏ nhanh tài liệu, bút vở và bình nước vào rồi khoác vai cơ động ngay lập tức',
        attributeEffects: { health: 2, morale: 6, reputation: 7, money: 0 },
        tipRewardId: 'tip_ky_luat_gio_giac',
        outcomeText: 'Tác phong nhanh nhẹn mẫu mực, đồ đạc xếp gọn trong nháy mắt giúp bạn có mặt tại giảng đường mới trước giờ quy định!',
      },
      {
        id: 'm_sjc_cdh_c2',
        text: 'Loay hoay tìm túi nilon đựng đồ, làm rơi sách vở và bị trễ hàng ngũ xuất phát',
        attributeEffects: { health: -2, morale: -5, reputation: -6, money: 0 },
        outcomeText: 'Bị đại đội phó nhắc nhở trước hàng quân vì tác phong lề mề, sách vở bị quăn mép dơ bẩn.',
      },
      {
        id: 'm_sjc_cdh_c3',
        text: 'Nhờ bạn cầm hộ từng món rời rạc, vừa chạy vừa lo rơi tài liệu học tập giữa dốc đồi',
        attributeEffects: { health: -1, morale: -2, reputation: -2, money: 0 },
        outcomeText: 'Chạy thở không ra hơi lên tới đồi, may mắn tài liệu không bị thất lạc giữa đường.',
      },
    ],
  },
  // --- TÌNH HUỐNG MÙA HÈ HÒA LẠC MỚI (EXPANSION) ---
  {
    id: 'm_tap_ngam_ban_ak',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Huấn luyện chiến thuật',
    topic: 'shooting_range_ak',
    title: '[SÁNG] Tập ngắm bắn súng tiểu liên AK bia số 4 ngoài thao trường nắng gắt',
    narrative: '08:30 sáng, cái nóng đầu hè đổ lửa xuống thao trường đất đỏ, tiếng ve sầu kêu inh ỏi trên sườn đồi. Toàn trung đội nằm sấp trên nền sỏi đá nóng ran, tì ngực giữ súng AK căn đường ngắm cơ bản qua khe ngắm và đầu ngắm vào giữa tâm bia số 4.',
    speaker: {
      name: 'Thầy Giáo viên Bắn súng',
      role: 'Sĩ quan huấn luyện',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Mặt súng phải thăng bằng! Lấy đường ngắm đúng, nín thở, tăng cò dần đều! Người nào giật cò bắn trượt bia phạt chống đẩy 20 cái!',
    backgroundType: 'outdoor',
    choices: [
      {
        id: 'm_ak_c1',
        text: 'Nằm đúng tư thế 3 điểm tì, điều hòa nhịp thở êm ái, bóp cò từ từ bằng đốt thứ nhất ngón trỏ',
        attributeEffects: { health: -2, morale: 8, reputation: 10, money: 0 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Thao tác mẫu mực! Thầy kiểm tra đường ngắm khen ngợi bạn trước cả trung đội vì độ chuẩn xác tuyệt đối.',
      },
      {
        id: 'm_ak_c2',
        text: 'Sợ đau vai nên tì báng súng lỏng lẻo, mắt nhắm tịt lại rồi giật cò vội vàng',
        attributeEffects: { health: -5, morale: -4, reputation: -6, money: 0 },
        outcomeText: 'Báng súng thúc mạnh vào hõm vai gây ê ẩm tím tái, đường ngắm bị lệch hẳn sang góc bãi cỏ.',
      },
      {
        id: 'm_ak_c3',
        text: 'Lấy chiếc khăn mặt mỏng kê nhẹ dưới khuỷu tay tránh trầy xước sỏi đá rồi tập trung căn đường ngắm',
        attributeEffects: { health: 1, morale: 6, reputation: 5, money: 0 },
        outcomeText: 'Khuỷu tay đỡ rát trên nền sỏi đá nóng, bạn kiên trì giữ vững đường ngắm qua đợt tập dượt.',
      },
    ],
  },
  {
    id: 'm_mua_ngap_san_tap',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Thời tiết & Môi trường',
    topic: 'rain_field_cancel',
    title: '[SÁNG] Mưa dông ngập sân tập trung - Bất ngờ hoãn thao trường học trong giảng đường',
    narrative: '06:15 sáng, một cơn mưa rào mùa hè xối xả bất ngờ trút xuống đồi Hòa Lạc làm ngập trắng sân chào cờ và bãi tập điều lệnh. Tiếng loa phát thanh vang lên: "Toàn đại đội tạm hoãn ra bãi tập, chuyển sang học lý thuyết vũ khí trong nhà có quạt mát!". Cả phòng reo hò.',
    speaker: {
      name: 'Linh',
      role: 'Bạn cùng phòng',
      avatarId: 'linh',
      mood: 'laugh',
    },
    dialogue: 'Trời ơi mưa mát quá! Được nghỉ chạy ngoài nắng rồi, nhưng nghe bảo thầy kiểm tra lý thuyết gắt lắm đấy nhé!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'm_mnst_c1',
        text: 'Tranh thủ mở giáo trình ôn lại cấu tạo súng tiểu liên AK và tính năng lựu đạn trước giờ lên lớp',
        attributeEffects: { health: 2, morale: 8, reputation: 8, money: 0 },
        tipRewardId: 'tip_tap_trung_nghe_giang_chieu',
        outcomeText: 'Sự chủ động giúp bạn tự tin xung phong trả lời câu hỏi của giáo viên, giành trọn điểm 10 lý thuyết cho tiểu đội!',
      },
      {
        id: 'm_mnst_c2',
        text: 'Mừng rỡ trèo tót lên giường ngủ nướng thêm 30 phút mặc kệ tiếng gọi tập hợp',
        attributeEffects: { health: 3, morale: -3, reputation: -8, money: 0 },
        outcomeText: 'Suýt nữa muộn giờ điểm danh di chuyển, bạn bị lớp trưởng nhắc nhở vì tư tưởng buông thả kỷ luật.',
      },
      {
        id: 'm_mnst_c3',
        text: 'Cùng các bạn trong phòng tranh thủ lau khô bậu cửa sổ bị nước mưa hắt vào và dọn dẹp phòng',
        attributeEffects: { health: 1, morale: 6, reputation: 6, money: 0 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        outcomeText: 'Phòng ốc sạch sẽ tinh tươm, không bị ẩm mốc đồ đạc sau cơn mưa lớn rào rạt.',
      },
    ],
  },
  {
    id: 'm_di_nhat_luu_dan_lac',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Vũ khí & Thao trường',
    topic: 'lost_grenade_search',
    title: '[SÁNG] Ném lựu đạn xa trúng đích & Đi nhặt quả lựu đạn tập rơi lạc trong bụi rậm',
    narrative: 'Trong giờ huấn luyện ném lựu đạn xa trúng đích tại bãi tập số 3, một đồng đội ném quá trớn khiến quả lựu đạn gang huấn luyện bay vọt qua bờ rào rơi tọt vào bụi gai ven sườn đồi. Thầy giáo yêu cầu cả tổ phải lùng sục tìm lại trước khi chuyển sang bài học tiếp theo.',
    speaker: {
      name: 'Thầy Giáo viên Kỹ thuật',
      role: 'Sĩ quan huấn luyện',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Mỗi quả lựu đạn huấn luyện đều có số hiệu quân trang! Tìm cho bằng được mang về đây, không để thất lạc!',
    backgroundType: 'outdoor',
    choices: [
      {
        id: 'm_dnl_c1',
        text: 'Bẻ cành cây khô gạt cỏ gai, đi ủng cao cổ cẩn thận dò tìm từng mét vuông theo hướng bay của lựu đạn',
        attributeEffects: { health: -1, morale: 6, reputation: 9, money: 0 },
        tipRewardId: 'tip_an_toan_thao_truong',
        outcomeText: 'Nhờ óc quan sát nhạy bén, bạn tìm thấy quả lựu đạn nằm gọn dưới gốc sim, được thầy biểu dương tác phong thận trọng!',
      },
      {
        id: 'm_dnl_c2',
        text: 'Hấp tấp lao mình vào lùm cây gai tìm kiếm khiến gai cào rách mép tay áo và trầy xước bắp chân',
        attributeEffects: { health: -6, morale: -4, reputation: 2, money: 0 },
        outcomeText: 'Vết gai cào rát buốt phải ghé trạm xá xin cồn đỏ sát trùng, bài học nhớ đời về sự nóng vội.',
      },
      {
        id: 'm_dnl_c3',
        text: 'Đứng ngoài đường râm mát chỉ trỏ cho các bạn khác vào bụi tìm kiếm',
        attributeEffects: { health: 0, morale: -5, reputation: -8, money: 0 },
        outcomeText: 'Thái độ ngại khó bị tiểu đội trưởng phê bình thẳng thắn, mất điểm tín nhiệm trong mắt tập thể.',
      },
    ],
  },
  {
    id: 'm_chinh_tri_giang_duong_tang_5',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Học tập & Giảng đường',
    topic: 'lecture_stairs_climb',
    title: '[SÁNG] Leo bộ 5 tầng lên giảng đường học Luật Quốc phòng & An ninh',
    narrative: '07:15 sáng, hồi còi báo hiệu di chuyển lên khu giảng đường trên đồi. Phòng học lý thuyết tiêu chuẩn dành cho 1 đại đội (khoảng 90 sinh viên) nằm trên tầng 5, gồm các dãy bàn ghế gỗ dài ngăn nắp. Bậc thang dốc đứng đòi hỏi sinh viên rèn luyện sức bền trước giờ học.',
    speaker: {
      name: 'Nam',
      role: 'Bạn cùng lớp',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Tầng 5 leo mỏi nhừ hai bắp chân luôn cậu ơi! Nhanh chân lên không thầy đóng cửa giảng đường điểm danh đấy!',
    backgroundType: 'study',
    choices: [
      {
        id: 'm_ctg_c1',
        text: 'Hít thở đều đặn theo nhịp bước chân, giữ lưng thẳng leo lên đúng giờ và chọn bàn đầu nghe giảng',
        attributeEffects: { health: 2, morale: 7, reputation: 8, money: 0 },
        tipRewardId: 'tip_tap_trung_nghe_giang_chieu',
        outcomeText: 'Vừa rèn luyện thể lực vừa tiếp thu trọn vẹn bài giảng Đường lối quốc phòng của Đảng, thầy khen ngợi tinh thần học tập.',
      },
      {
        id: 'm_ctg_c2',
        text: 'Cố chạy nước rút thật nhanh lên các tầng khiến tim đập thình thịch, bước vào lớp thở dốc không ra hơi',
        attributeEffects: { health: -4, morale: -2, reputation: 1, money: 0 },
        outcomeText: 'Mất cả nửa tiết đầu chỉ để thở và lau mồ hôi, đầu óc choáng váng không ghi chép được nội dung nào.',
      },
      {
        id: 'm_ctg_c3',
        text: 'Giúp bạn nữ mang chiếc cặp sách nặng leo cầu thang, san sẻ gánh nặng cho đồng đội',
        attributeEffects: { health: -1, morale: 8, reputation: 9, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Hành động đẹp thể hiện tinh thần tương thân tương ái, bạn nhận được lời cảm ơn chân thành và nụ cười rạng rỡ.',
      },
    ],
  },
  {
    id: 'm_tap_the_duc_sang_hoi_hop',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Thể dục & Kỷ luật',
    topic: 'morning_exercise_0530',
    title: '[SÁNG] Báo thức 05:30 theo tiếng còi toàn khung D2 & Chạy dài thể lực',
    narrative: '05:30 sáng, tiếng còi báo thức vang rền toàn khung D2. Cả phòng 14 người bật dậy dứt khoát, xỏ giày vải bộ đội khẩn trương xuống sân chào cờ. Những ai không trong tổ trực nhật làm vệ sinh khu vực sẽ tham gia tập thể dục tay không và chạy dài rèn luyện thể lực.',
    speaker: {
      name: 'Thầy Cán bộ Thể lực',
      role: 'Sĩ quan huấn luyện',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Một! Hai! Ba! Bốn! Chạy đều bước, không được bỏ hàng! Người nào tụt lại phía sau chạy thêm 1 vòng nữa!',
    backgroundType: 'parade',
    choices: [
      {
        id: 'm_ttd_c1',
        text: 'Duy trì bước chạy đều nhịp nhàng cùng tiếng hô Một - Hai dõng dạc của trung đội',
        attributeEffects: { health: 4, morale: 7, reputation: 6, money: 0 },
        tipRewardId: 'tip_the_duc_buoi_sang',
        outcomeText: 'Lồng ngực căng tràn khí trời trong lành buổi sớm Hòa Lạc, cơ thể ấm bừng đầy sinh lực cho cả ngày dài.',
      },
      {
        id: 'm_ttd_c2',
        text: 'Chạy lề mề tụt lại cuối hàng, kéo lê đôi giày vải trên mặt đường bê tông',
        attributeEffects: { health: -2, morale: -4, reputation: -6, money: 0 },
        outcomeText: 'Bị thầy cán bộ tuýt còi nhắc nhở, tiểu đội phải chờ đợi khiến thành tích thi đua buổi sáng bị trừ điểm.',
      },
      {
        id: 'm_ttd_c3',
        text: 'Vừa chạy vừa cổ vũ động viên các bạn có thể lực yếu bên cạnh cố gắng không bỏ cuộc',
        attributeEffects: { health: 1, morale: 9, reputation: 8, money: 0 },
        tipRewardId: 'tip_ky_luat_gio_giac',
        outcomeText: 'Tinh thần đồng chí gắn kết giúp cả tiểu đội cùng nhau cán đích trọn vẹn 4 vòng sân trong tiếng reo vui.',
      },
    ],
  },
  {
    id: 'm_don_ve_sinh_ho_rac',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Lao động công ích',
    topic: 'trash_duty_morning',
    title: '[SÁNG] Lao động công ích: Thu gom rác và phát cỏ quanh khu tăng gia sản xuất',
    narrative: '06:30 sáng, trước giờ ăn sáng, tổ của bạn nhận phân công đi gom lá khô, dọn vệ sinh rãnh thoát nước và nhổ cỏ quanh khu vườn rau tăng gia của đại đội. Cần hoàn thành tươm tất trước khi ban giám khảo nội vụ đi chấm thi đua.',
    speaker: {
      name: 'Huy',
      role: 'Bạn cùng phòng',
      avatarId: 'huy',
      mood: 'normal',
    },
    dialogue: 'Cỏ dại mọc nhanh thật đấy, nhưng làm chung đông vui tí là xong ngay thôi cậu ơi!',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'm_dvs_c1',
        text: 'Cầm chổi tre và cào sắt tích cực gom sạch từng đống lá rụng, đổ rác đúng nơi quy định',
        attributeEffects: { health: 1, morale: 6, reputation: 8, money: 0 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Khu tăng gia sạch đẹp phong quang, luống rau xanh mướt được đại đội trưởng khen ngợi điểm 10 thi đua.',
      },
      {
        id: 'm_dvs_c2',
        text: 'Quét dọn qua loa rồi lén quét lá khô dồn xuống rãnh thoát nước cống ngầm',
        attributeEffects: { health: -1, morale: -4, reputation: -8, money: 0 },
        outcomeText: 'Rãnh thoát nước bị tắc nghẽn khi mưa xuống, tổ bạn bị kỷ luật phải quay lại thông cống buổi chiều.',
      },
      {
        id: 'm_dvs_c3',
        text: 'Tỉ mỉ phân loại chai nhựa và vỏ lon gom lại để ủng hộ quỹ kế hoạch nhỏ của trung đội',
        attributeEffects: { health: 0, morale: 7, reputation: 7, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Ý thức môi trường tuyệt vời! Hành động nhỏ nhưng lan tỏa lối sống văn minh trong toàn khóa học.',
      },
    ],
  },
  {
    id: 'm_vuot_vat_can_go',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Thể lực & Vật cản',
    topic: 'obstacle_course_wall',
    title: '[SÁNG] Bài tập thể lực vượt vật cản tổng hợp & Leo tường gỗ thao trường 2 mét',
    narrative: 'Sáng thứ Năm, đại đội bước vào nội dung huấn luyện thể lực vượt vật cản K91: nhảy hào sâu, đi cầu độc mộc và vượt qua bức tường gỗ cao 2 mét. Bức tường dựng đứng là thử thách lớn đối với nhiều sinh viên thể lực chưa quen.',
    speaker: {
      name: 'Thầy Cán bộ Huấn luyện',
      role: 'Sĩ quan thể lực',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Đạp chân lấy đà, bật người bám mép tường rồi vung chân qua! Tự tin lên, không có gì phải sợ hãi!',
    backgroundType: 'outdoor',
    choices: [
      {
        id: 'm_vvc_c1',
        text: 'Lấy đà 5 bước chuẩn xác, dậm nhảy dứt khoát bám mép tường rồi đu người vượt qua nhẹ nhàng',
        attributeEffects: { health: 3, morale: 10, reputation: 9, money: 0 },
        tipRewardId: 'tip_an_toan_thao_truong',
        outcomeText: 'Động tác dứt khoát như một chiến sĩ đặc công thực thụ! Tiếng vỗ tay hoan hô vang dội cả bãi tập.',
      },
      {
        id: 'm_vvc_c2',
        text: 'Do dự khi lấy đà khiến cú bật bị hụt, đập nhẹ đầu gối vào thành ván gỗ',
        attributeEffects: { health: -5, morale: -4, reputation: -2, money: 0 },
        outcomeText: 'Đầu gối hơi ê ẩm, bạn phải xoa dầu gió và rút kinh nghiệm cho lần thử sức tiếp theo.',
      },
      {
        id: 'm_vvc_c3',
        text: 'Đứng làm trụ nâng chân hỗ trợ các đồng đội có thể lực yếu leo qua tường trước',
        attributeEffects: { health: -2, morale: 9, reputation: 10, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Sự hỗ trợ chí nghĩa chí tình giúp toàn bộ tiểu đội đều vượt qua thử thách bức tường mà không ai bị rớt lại!',
      },
    ],
  },
  {
    id: 'm_tap_nem_luu_dan_xa_trung_dich',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Thao trường huấn luyện',
    topic: 'grenade_throwing_practice',
    title: '[SÁNG] Bài tập ném lựu đạn xa trúng đích vào vòng tròn ngụy trang bãi cỏ',
    narrative: '08:00 sáng, cả đại đội tập trung tại bãi ném lựu đạn. Mục tiêu là vòng tròn cắm cờ đỏ cách xa 30 mét giữa bãi cỏ. Trọng lượng quả lựu đạn gang nặng trĩu tay đòi hỏi sự phối hợp nhịp nhàng giữa sức vung cánh tay và đà xoay hông.',
    speaker: {
      name: 'Thầy Cán bộ Thao trường',
      role: 'Giáo viên quân sự',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Đứng chân trước chân sau vững chắc, tay vung hình vòng cung theo hướng 45 độ, dồn lực từ gót chân lên eo! Chuẩn bị... NÉM!',
    backgroundType: 'outdoor',
    choices: [
      {
        id: 'm_nld_c1',
        text: 'Đứng đúng thế chân trước chân sau, lấy đà vung tay vòng cung chuẩn xác đưa lựu đạn rơi gọn vào tâm vòng cờ',
        attributeEffects: { health: 2, morale: 9, reputation: 10, money: 0 },
        tipRewardId: 'tip_an_toan_thao_truong',
        outcomeText: 'Quả lựu đạn rơi cắm phập chính giữa vòng tròn đỏ! Thầy giáo giơ cờ hoa biểu dương phát ném điểm 10 xuất sắc!',
      },
      {
        id: 'm_nld_c2',
        text: 'Dùng sức bắp tay gồng cứng giật vội, quả lựu đạn rơi cắm xuống đất cách vạch ném chỉ 12 mét',
        attributeEffects: { health: -3, morale: -4, reputation: -2, money: 0 },
        outcomeText: 'Cơ bắp cánh tay bị căng tức do dùng sai lực, bạn phải ra khu vực giãn cơ thực hiện lại động tác không tải.',
      },
      {
        id: 'm_nld_c3',
        text: 'Bình tĩnh quan sát kỹ thuật của các đồng chí ném trước, trao đổi bí quyết lấy đà cùng tiểu đội trưởng',
        attributeEffects: { health: 1, morale: 7, reputation: 8, money: 0 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Nắm chắc yếu lĩnh kỹ thuật giúp bạn tự tin thực hiện cú ném đạt điểm Giỏi ở lượt thi sau!',
      },
    ],
  },
  {
    id: 'm_mua_ngap_san_tap_hoan_thao_truong',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Thời tiết & Sinh hoạt',
    topic: 'rain_cancels_field_training',
    title: '[SÁNG] Mưa ngập sân tập trung - Bất ngờ hoãn ra thao trường học nội vụ trong phòng',
    narrative: 'Trận mưa dông rạng sáng biến sân cỏ tập trung thành một vũng nước ngập qua mắt cá chân. Tiếng loa đại đội vang lên thông báo: Các tiểu đội hoãn hành quân ra thao trường buổi sáng, ở lại khu nhà D2 tổng vệ sinh nội vụ và học điều lệnh.',
    speaker: {
      name: 'Lớp trưởng',
      role: 'Ban cán sự lớp',
      avatarId: 'an',
      mood: 'smile',
    },
    dialogue: 'Hôm nay được miễn lội bùn thao trường rồi các bạn ơi! Tranh thủ tổng vệ sinh phòng và gấp lại chăn màn thật đẹp nhé!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'm_mns_c1',
        text: 'Chủ động cùng cả phòng lấy chổi lau nhà, khăn ẩm tổng vệ sinh sàn gạch men và sắp xếp lại toàn bộ tủ giày dép',
        attributeEffects: { health: 2, morale: 8, reputation: 9, money: 0 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        outcomeText: 'Phòng 14 người sạch bong kin kít, thơm tho thoáng đãng được tổ kiểm tra nội vụ chấm điểm Xuất sắc!',
      },
      {
        id: 'm_mns_c2',
        text: 'Lợi dụng trời mưa mát kéo chăn trùm kín đầu ngủ nướng bù giấc đến tận giờ cơm trưa',
        attributeEffects: { health: 0, morale: -3, reputation: -8, money: 0 },
        outcomeText: 'Cán bộ đi kiểm tra đột xuất bắt quả tang đang ngủ nướng trong giờ hành chính, cả phòng bị nhắc nhở.',
      },
      {
        id: 'm_mns_c3',
        text: 'Kê ghế ngồi bên hiên ngắm mưa Hòa Lạc rơi trên rặng thông và cùng bạn bè hát nghêu ngao những khúc ca sinh viên',
        attributeEffects: { health: 1, morale: 10, reputation: 6, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Một buổi sáng hè mưa bay thanh bình và lãng mạn, ghi dấu kỷ niệm khó quên của thời tân binh Hòa Lạc.',
      },
    ],
  },
  {
    id: 'm_do_rac_va_lao_dong_khu_nha',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Lao động công ích',
    topic: 'morning_garbage_duty',
    title: '[SÁNG] Phiên trực nhật đi đổ rác và làm cỏ khuôn viên đại đội',
    narrative: '06:15 sáng sau giờ ăn sáng, tổ trực nhật của bạn nhận nhiệm vụ chuyển rác sinh hoạt của tầng 2 ra hố rác tập kết và nhổ cỏ quanh bồn hoa khu nhà D2. Thùng rác nặng trịch cần sự phối hợp ăn ý giữa hai người.',
    speaker: {
      name: 'Bạn trực cùng',
      role: 'Đồng đội trực nhật',
      avatarId: 'roommate',
      mood: 'normal',
    },
    dialogue: 'Thùng rác này hơi nặng đấy bạn, chúng mình luồn đòn tre khiêng hai đầu cho đỡ đau tay nhé!',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'm_drr_c1',
        text: 'Khéo léo luồn đòn khiêng thùng rác ra xe gom tập kết, quét dọn sạch sẽ quanh miệng thùng và rửa tay sát khuẩn',
        attributeEffects: { health: 1, morale: 7, reputation: 9, money: 0 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Khuôn viên sạch đẹp tinh tươm, công việc hoàn thành nhanh gọn trước giờ kẻng tập trung đại đội!',
      },
      {
        id: 'm_drr_c2',
        text: 'Kéo lê thùng rác trên mặt đường làm nước rỉ rác chảy dài dọc hành lang gây mùi khó chịu',
        attributeEffects: { health: -2, morale: -5, reputation: -8, money: 0 },
        outcomeText: 'Bị cán bộ trực ban nhắc nhở và yêu cầu xách nước lau lại toàn bộ đoạn đường vừa kéo lê thùng rác.',
      },
      {
        id: 'm_drr_c3',
        text: 'Phân loại vỏ chai nhựa và lon nước ngọt gom riêng vào túi tái chế ủng hộ kế hoạch xanh của liên chi đoàn',
        attributeEffects: { health: 1, morale: 8, reputation: 8, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Hành động nhỏ đầy ý thức bảo vệ môi trường nhận được lời khen ngợi từ bí thư liên chi đoàn!',
      },
    ],
  },
  {
    id: 'm_hoc_chinh_tri_hoi_truong_lon',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'Học tập giảng đường',
    topic: 'political_education_hall',
    title: '[SÁNG] Tiết học chính trị trên giảng đường Đại đội (90 sinh viên)',
    narrative: '07:30 sáng, đại đội gồm gần 90 sinh viên ổn định chỗ ngồi ngay ngắn trên các dãy bàn ghế gỗ dài của giảng đường. Không khí trang nghiêm, kỷ luật và ấm cúng với bài giảng sâu sắc về Lịch sử Quân đội nhân dân Việt Nam và chủ quyền biên giới hải đảo.',
    speaker: {
      name: 'Thầy Giảng viên Chính trị',
      role: 'Đại tá - Giảng viên',
      avatarId: 'commander',
      mood: 'smile',
    },
    dialogue: 'Hôm nay đại đội chúng ta cùng tìm hiểu về truyền thống vẻ vang của quân đội ta. Các đồng chí sinh viên Báo chí hãy chăm chú lắng nghe và ghi chép nhé!',
    backgroundType: 'lecture',
    choices: [
      {
        id: 'm_hct_c1',
        text: 'Mở cuốn sổ tay quân sự SJC, chăm chú lắng nghe và nắn nót ghi lại những luận điểm quan trọng cùng số liệu lịch sử',
        attributeEffects: { health: 1, morale: 8, reputation: 10, money: 0 },
        tipRewardId: 'tip_ghi_chep_so_tay_day_du',
        outcomeText: 'Kiến thức bổ ích giúp bạn nắm chắc nội dung ôn thi lý luận và tự hào hơn về truyền thống đất nước!',
      },
      {
        id: 'm_hct_c2',
        text: 'Gục đầu xuống mặt bàn đánh một giấc ngủ say sưa dưới làn gió quạt trần mát rượi',
        attributeEffects: { health: 1, morale: -4, reputation: -8, money: 0 },
        outcomeText: 'Thầy trợ giảng đi tuần phát hiện và gõ thước lên bàn nhắc nhở đứng dậy nghe giảng 15 phút.',
      },
      {
        id: 'm_hct_c3',
        text: 'Tự tin xung phong phát biểu trả lời câu hỏi tình huống của thầy giáo với lập luận sắc sảo của sinh viên Báo chí',
        attributeEffects: { health: 0, morale: 11, reputation: 11, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Câu trả lời thông minh và khúc chiết nhận được tràng pháo tay giòn giã từ toàn thể đại đội 90 sinh viên, thầy giáo gật đầu khen ngợi!',
      },
    ],
  },
];

export const AFTERNOON_SITUATIONS: StoryEvent[] = [
  {
    id: 'truc_ban_nha_an_chieu',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'military_duty',
    topic: 'mess_hall_duty',
    title: 'Trực ban nhà ăn đại đội & Chuẩn bị mâm cơm 6 người',
    narrative: '16:30 chiều, tiểu đội bạn được phân công làm nhiệm vụ trực nhật nhà ăn đại đội: lau khô bàn ăn inox, xếp chuẩn 6 bát - 6 đôi đũa cho từng mâm và bưng cơm canh nóng sốt chia đều trước khi đại đội hành quân vào ăn.',
    speaker: {
      name: 'Tiểu đội trưởng',
      role: 'Trưởng kíp trực ban',
      avatarId: 'commander',
      mood: 'normal',
    },
    dialogue: 'Mâm nào cũng phải đủ 6 bát, đũa phải dùng khăn sạch lau khô ráo, chia đều thức ăn để đồng đội đi tập về là có cơm nóng ăn ngay nhé!',
    backgroundType: 'canteen',
    choices: [
      {
        id: 'tbna_c1',
        text: 'Tỉ mỉ lau khô từng đôi đũa, xếp bàn ăn ngay ngắn và chia đều từng phần thức ăn nóng sốt',
        attributeEffects: { reputation: 8, morale: 5, health: -2 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Mâm cơm tươm tất chuẩn bị chu đáo khiến cả đại đội tấm tắc khen ngợi, kíp trực ban được thầy quản lý nhà ăn biểu dương!',
      },
      {
        id: 'tbna_c2',
        text: 'Chia thức ăn qua loa, để đũa còn ướt và bát đĩa lộn xộn khiến các bạn vào ăn phải tự đi đổi đũa',
        attributeEffects: { reputation: -6, morale: -4 },
        outcomeText: 'Đồng đội phàn nàn vì đũa ướt dính, tiểu đội bị nhắc nhở phải ở lại dọn dẹp vệ sinh nhà ăn sau bữa cơm.',
      },
      {
        id: 'tbna_c3',
        text: 'Nhanh nhẹn phụ các cô cấp dưỡng bê nồi canh lớn và bưng khay cơm phụ các dãy bàn bên cạnh',
        attributeEffects: { reputation: 6, morale: 8, health: 1 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Sự nhiệt tình xông xáo giúp công việc xong sớm, các cô cấp dưỡng quý mến thưởng thêm cho tiểu đội đĩa dưa hấu mát lạnh!',
      },
    ],
  },
  {
    id: 'a_nha_an_10h30',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Ăn uống & Tập thể',
    topic: 'lunch',
    title: '10h30 đại đội tập trung vào nhà ăn',
    narrative: 'Sau một buổi học căng thẳng, kẻng nhà ăn vang lên dồn dập. Bàn ăn inox đã bày sẵn mâm cơm nóng hổi dành cho 6 người.',
    speaker: {
      name: 'Linh',
      role: 'Bạn cùng mâm',
      avatarId: 'linh',
      mood: 'smile',
    },
    dialogue: 'Cơm nóng canh ngọt này các bạn ơi! Ăn xong chúng mình cùng dọn bàn nhé!',
    backgroundType: 'canteen',
    choices: [
      {
        id: 'a_na_c1',
        text: 'Ăn uống từ tốn, cùng 5 bạn trong mâm phân công người xếp bát đĩa, người gom thức ăn thừa',
        attributeEffects: { health: 8, morale: 5, reputation: 6, money: 0 },
        tipRewardId: 'tip_chia_com_cong_bang',
        outcomeText: 'Mâm cơm sạch sẽ, ấm áp tình đồng chí. Các cô chú nuôi quân nhìn mâm bàn dọn ngăn nắp rất hài lòng.',
      },
      {
        id: 'a_na_c2',
        text: 'Ăn vội vã cho xong rồi đứng dậy bỏ đi trước, để mặc bát đũa cho bạn cùng mâm dọn',
        attributeEffects: { health: 2, morale: -5, reputation: -6, money: 0 },
        outcomeText: 'Hành động vô ý thức khiến các bạn cùng mâm phiền lòng và đánh giá thấp tinh thần tập thể của bạn.',
      },
      {
        id: 'a_na_c3',
        text: 'Xới cơm chia đều cho cả 6 bát trước khi ăn và chủ động lấy thêm canh nóng cho các bạn',
        attributeEffects: { health: 6, morale: 6, reputation: 8, money: 0 },
        outcomeText: 'Sự chu đáo và tinh tế của bạn khiến mâm cơm chan hòa tình cảm đồng chí thân thương.',
      },
    ],
  },
  {
    id: 'a_xep_giay_dep',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Nề nếp & Kỷ luật',
    topic: 'shoes',
    title: 'Đôi giày vải dính đầy bụi đất và giá dép',
    narrative: 'Đi học về mệt mỏi, đôi giày vải dính đầy bụi đất đỏ. Một bạn cùng phòng tháo dép vứt ngang cửa chắn lối đi.',
    speaker: {
      name: 'An',
      role: 'Lớp phó',
      avatarId: 'an',
      mood: 'normal',
    },
    dialogue: 'Dép để lộn xộn thế kia trực ban đi qua trừ điểm cả phòng đấy, xếp lên giá ngay đi nào!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'a_xgd_c1',
        text: 'Nhắc bạn cùng xếp giày dép từ phải qua trái, từ to đến nhỏ, kín tầng 1 mới xếp tầng 2 và quét sạch gạch',
        attributeEffects: { health: 1, morale: 4, reputation: 6, money: 0 },
        tipRewardId: 'tip_xep_giay_dep_thang_hang',
        inventoryRewardId: 'dep_di_trong_nha',
        outcomeText: 'Giá giày dép gọn gàng như trong doanh trại chính quy! Cả phòng được cộng điểm tác phong nội vụ.',
      },
      {
        id: 'a_xgd_c2',
        text: 'Đi cả giày dính bụi vào trong phòng rồi tiện chân đá dép vào gầm bàn',
        attributeEffects: { health: -1, morale: -4, reputation: -8, money: 0 },
        outcomeText: 'Bụi đất vương vãi khắp sàn gạch vừa lau, khiến bạn trực nhật bức xúc càu nhàu.',
      },
      {
        id: 'a_xgd_c3',
        text: 'Dùng khăn ẩm lau sơ qua mũi giày dính bụi trước khi đặt ngay ngắn lên tầng trên của giá dép',
        attributeEffects: { health: 0, morale: 4, reputation: 7, money: 0 },
        outcomeText: 'Đôi giày sạch đẹp tề chỉnh, phòng ở luôn giữ được độ sáng bóng sạch sẽ.',
      },
    ],
  },
  {
    id: 'a_tat_cau_dao_quat',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Kỷ luật & An toàn',
    topic: 'electricity',
    title: 'Người đi cuối cùng trước giờ học chiều',
    narrative: 'Giờ tập trung học chiều đến, cả phòng vội vã kéo nhau xuống sân. Bạn là người bước ra khỏi phòng cuối cùng.',
    speaker: {
      name: 'Minh',
      role: 'Bạn cùng phòng',
      avatarId: 'minh',
      mood: 'worried',
    },
    dialogue: 'Nhanh lên cậu ơi, sắp đến giờ tập hợp dưới sân rồi kìa!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'a_tcd_c1',
        text: 'Kiểm tra tắt cầu dao, rút phích cắm và quấn gọn dây vào chân quạt trước khi khép cửa',
        attributeEffects: { health: 0, morale: 2, reputation: 6, money: 0 },
        tipRewardId: 'tip_tat_dien_tiet_kiem',
        outcomeText: 'Thói quen cẩn trọng đảm bảo an toàn phòng chống cháy nổ và giữ trọn điểm thi đua phòng ở.',
      },
      {
        id: 'a_tcd_c2',
        text: 'Thấy quạt còn quay nhưng cứ để quay vù vù cho thoáng nhà rồi đóng cửa đi',
        attributeEffects: { health: 0, morale: -2, reputation: -8, money: 0 },
        outcomeText: 'Đoàn cán bộ kiểm tra phòng phát hiện quạt quay phòng trống, lập biên bản trừ điểm nề nếp toàn phòng!',
      },
      {
        id: 'a_tcd_c3',
        text: 'Tắt nhanh công tắc quạt và khóa chốt then cửa sổ cẩn thận đề phòng gió lốc chiều',
        attributeEffects: { health: 0, morale: 3, reputation: 7, money: 0 },
        outcomeText: 'Hành động nhanh gọn và chuẩn xác, bảo vệ an toàn đồ đạc cho cả phòng.',
      },
    ],
  },
  {
    id: 'a_san_phoi_3_day',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Vệ sinh & Kỷ luật',
    topic: 'laundry',
    title: 'Trận địa phơi đồ trên 3 dây thép ban công phòng',
    narrative: 'Buổi chiều, sau khi giặt xong và vắt kiệt quân phục trong phòng giặt khép kín, bạn mang ra ban công phòng nơi có 3 dây thép căng ngang theo quy chuẩn nội vụ quân sự.',
    speaker: {
      name: 'Huy',
      role: 'Bạn cùng phòng',
      avatarId: 'huy',
      mood: 'smile',
    },
    dialogue: 'Cậu phơi đúng quy chuẩn từ trái sang phải trên 3 dây ban công nhé, hôm qua phòng bên bị trừ điểm thi đua vì treo lẫn lộn đấy!',
    backgroundType: 'wash',
    choices: [
      {
        id: 'a_sp_c1',
        text: 'Treo chuẩn chỉ từ trái sang phải: Dây 1 (đồ lót, tất), Dây 2 (thường phục, khăn tắm), Dây 3 (quân phục, khăn mặt)',
        attributeEffects: { health: 1, morale: 4, reputation: 8, money: 0 },
        tipRewardId: 'tip_phan_loai_3_day_phoi',
        inventoryRewardId: 'moc_treo_quan_ao',
        outcomeText: 'Dây phơi ban công ngăn nắp thẳng tắp, được ban thi đua chấm điểm tối đa cho phòng!',
      },
      {
        id: 'a_sp_c2',
        text: 'Tiện tay vắt bừa bãi quần áo ướt sũng đè lên nhau trên cùng một dây phơi',
        attributeEffects: { health: 0, morale: -2, reputation: -6, money: 0 },
        outcomeText: 'Bị trực ban kiểm tra nhắc nhở và trừ điểm thi đua nội vụ của phòng.',
      },
      {
        id: 'a_sp_c3',
        text: 'Vắt kiệt nước tại bồn giặt trong phòng rồi mới mang ra móc kẹp chắc chắn từ trái sang phải',
        attributeEffects: { health: 0, morale: 3, reputation: 7, money: 0 },
        tipRewardId: 'tip_vat_do_kho_nhanh',
        outcomeText: 'Quần áo nhanh ráo nước, thẳng tắp và không lo bị gió đồi giật rơi.',
      },
    ],
  },
  {
    id: 'a_binh_nong_lanh',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'An toàn & Sinh hoạt',
    topic: 'water_heater',
    title: 'Tắm nước nóng an toàn sau ngày mưa lạnh',
    narrative: 'Mưa phùn khiến thời tiết se lạnh, các bạn đi học về đều háo hức muốn vào tắm nước nóng.',
    speaker: {
      name: 'Linh',
      role: 'Bạn học',
      avatarId: 'linh',
      mood: 'normal',
    },
    dialogue: 'Bật bình nóng lạnh nhớ canh giờ nhé, lúc tắm nhớ gạt aptomat xuống kẻo nguy hiểm!',
    backgroundType: 'wash',
    choices: [
      {
        id: 'a_bnl_c1',
        text: 'Bật bình nóng lạnh 15 phút, sau đó bắt buộc gạt aptomat tắt hẳn trước khi bước vào tắm',
        attributeEffects: { health: 6, morale: 5, reputation: 5, money: 0 },
        tipRewardId: 'tip_xu_ly_aptomat_nong_lanh',
        outcomeText: 'Làn nước ấm nóng xua tan giá lạnh an toàn tuyệt đối. Cả phòng yên tâm sinh hoạt.',
      },
      {
        id: 'a_bnl_c2',
        text: 'Vừa bật bình vừa xả vòi sen tắm cho nước luôn nóng bỏng',
        attributeEffects: { health: 2, morale: -4, reputation: -6, money: 0 },
        outcomeText: 'Bị bạn cùng phòng nhắc nhở nghiêm khắc vì vi phạm quy tắc an toàn điện tính mạng tập thể.',
      },
      {
        id: 'a_bnl_c3',
        text: 'Bật bình chung cho cả phòng tắm luân phiên, hẹn giờ chuông báo đúng 20 phút là tắt nguồn',
        attributeEffects: { health: 5, morale: 6, reputation: 7, money: 0 },
        outcomeText: 'Kế hoạch sử dụng nước nóng khoa học và tiết kiệm điện, ai cũng được tắm nước ấm an toàn.',
      },
    ],
  },
  {
    id: 'a_tra_sua_cong_sau',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Kỷ luật & Ăn uống',
    topic: 'outside_food',
    title: 'Cám dỗ trà sữa gà rán qua hàng rào cổng sau',
    narrative: 'Chiều muộn, mấy bạn phòng bên rủ nhau mua trà sữa và gà rán từ bên ngoài, bảo shipper giao qua khe hàng rào cổng sau Hola.',
    speaker: {
      name: 'Minh',
      role: 'Bạn cùng phòng',
      avatarId: 'minh',
      mood: 'laugh',
    },
    dialogue: 'Thèm trà sữa trân châu quá! Góp tiền làm một ly ship cổng sau không cậu?',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'a_ts_c1',
        text: 'Kiên quyết từ chối và nhắc các bạn về điều cấm số 1 của Trung tâm: không mua bán qua hàng rào',
        attributeEffects: { health: 2, morale: 4, reputation: 8, money: 0 },
        tipRewardId: 'tip_khong_mua_ban_qua_hang_rao',
        outcomeText: 'Sự kiên định và hiểu luật của bạn giúp cả nhóm tránh khỏi một vụ bắt quả tang kỷ luật nặng!',
      },
      {
        id: 'a_ts_c2',
        text: 'Góp 30.000đ mua một ly trà sữa trân châu full-topping uống giải khát',
        attributeEffects: { health: -15, morale: -5, reputation: -10, money: -30000 },
        outcomeText: 'Vừa nhận đồ qua rào thì bị Đội cờ đỏ tuần tra phát hiện! Bị lập biên bản kỷ luật và đau bụng vì đồ ăn không rõ nguồn gốc.',
      },
      {
        id: 'a_ts_c3',
        text: 'Rủ các bạn vào căng-tin chính thức mua hoa quả và sữa chua sạch ăn cho lành mạnh',
        attributeEffects: { health: 4, morale: 5, reputation: 6, money: -15000 },
        outcomeText: 'Vừa thỏa mãn cơn thèm ăn vặt vừa an toàn vệ sinh, không hề vi phạm quy định trung tâm.',
      },
    ],
  },
  {
    id: 'a_ngu_gat_tiet_chieu',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Học tập & Tác phong',
    topic: 'study',
    title: '14:15 tiết học Đường lối Quốc phòng An ninh',
    narrative: '14:15 chiều, tiết học về Đường lối Quốc phòng An ninh diễn ra êm đềm, tiếng quạt trần quay đều đều ru ngủ cả giảng đường.',
    speaker: {
      name: 'Giảng viên',
      role: 'Thầy giáo giảng đường',
      avatarId: 'commander',
      mood: 'normal',
    },
    dialogue: 'Các đồng chí chú ý sơ đồ tư duy trên bảng, phần này chắc chắn sẽ có trong đề thi kết thúc học phần!',
    backgroundType: 'lecture',
    choices: [
      {
        id: 'a_ng_c1',
        text: 'Tỉnh táo tiếp thu kiến thức, tích cực ghi chép sơ đồ từ khóa chất lượng để ôn thi',
        attributeEffects: { health: 0, morale: 6, reputation: 6, money: 0 },
        tipRewardId: 'tip_tap_trung_nghe_giang_chieu',
        inventoryRewardId: 'but_bi',
        outcomeText: 'Những dòng ghi chú khoa học giúp bạn nắm chắc kiến thức mà không tốn công học vẹt khi thi.',
      },
      {
        id: 'a_ng_c2',
        text: 'Chống tay lên cằm, gù gật ngủ vì nghĩ chợp mắt một tí không sao',
        attributeEffects: { health: 1, morale: -4, reputation: -6, money: 0 },
        outcomeText: 'Bị thầy gọi đứng dậy trả lời câu hỏi trước 200 sinh viên, ngượng ngùng đỏ bừng cả mặt!',
      },
      {
        id: 'a_ng_c3',
        text: 'Lấy bình nước hớp một ngụm nhỏ và dùng khăn ướt lau khóe mắt cho tỉnh táo',
        attributeEffects: { health: 1, morale: 4, reputation: 5, money: 0 },
        outcomeText: 'Cơn buồn ngủ tan biến tức thì, bạn tiếp tục tập trung theo dõi bài giảng quan trọng.',
      },
    ],
  },
  {
    id: 'a_chup_anh_giai_lao',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Kỷ luật & Tác phong',
    topic: 'media',
    title: 'Chụp ảnh tư liệu đời sống quân ngũ',
    narrative: 'Nhân giờ giải lao 15 phút trên lớp, nhóm bạn muốn sản xuất bộ ảnh tư liệu về đời sống tân binh tại Hola.',
    speaker: {
      name: 'Huy',
      role: 'Cây hài phòng',
      avatarId: 'huy',
      mood: 'laugh',
    },
    dialogue: 'Hay là lén chụp dìm dáng ngủ của thầy giáo đăng story câu like cho vui đi cậu?',
    backgroundType: 'lecture',
    choices: [
      {
        id: 'a_ca_c1',
        text: 'Xin phép chụp vài bức ảnh tư liệu học tập nghiêm túc, tôn trọng hình ảnh thầy cô',
        attributeEffects: { health: 0, morale: 6, reputation: 6, money: 0 },
        tipRewardId: 'tip_chup_anh_tu_lieu_dung_muc',
        outcomeText: 'Bộ ảnh học tập nghiêm trang, đẹp đẽ được chia sẻ lên trang tin sinh viên với nhiều lời khen ngợi.',
      },
      {
        id: 'a_ca_c2',
        text: 'Lén lút chụp ảnh dìm Thầy lúc đang giảng bài để đăng story "câu like"',
        attributeEffects: { health: 0, morale: -10, reputation: -15, money: 0 },
        outcomeText: 'Bị phát hiện và lập biên bản xử lý kỷ luật nghiêm khắc vì vi phạm quy định bảo mật hình ảnh và tôn sư trọng đạo!',
      },
      {
        id: 'a_ca_c3',
        text: 'Rủ cả nhóm cùng chụp ảnh tập thể quân phục rằn ri trước cổng nhà hiệu bộ lưu giữ kỷ niệm đẹp',
        attributeEffects: { health: 0, morale: 7, reputation: 5, money: 0 },
        outcomeText: 'Bức ảnh kỷ niệm tuyệt đẹp với nụ cười rạng rỡ của cả nhóm trong màu áo lính.',
      },
    ],
  },
  {
    id: 'a_binh_tong_khat_nuoc',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Sức khỏe & Huấn luyện',
    topic: 'hydration',
    title: 'Cổ họng khô rát sau 3 tiết học chiến thuật',
    narrative: 'Kết thúc 3 tiết học chiến thuật ngoài bãi tập, cổ họng khô rát, bình tông nước đeo bên hông nặng trĩu mát rượi.',
    speaker: {
      name: 'Minh',
      role: 'Bạn cùng phòng',
      avatarId: 'minh',
      mood: 'worried',
    },
    dialogue: 'Khát cháy họng rồi! Tu một hơi hết nửa bình cho đã đời nào!',
    backgroundType: 'outdoor',
    choices: [
      {
        id: 'a_bt_c1',
        text: 'Mở nắp bình tông, nhấp từng ngụm nhỏ, súc miệng rồi nuốt từ từ',
        attributeEffects: { health: 6, morale: 4, reputation: 2, money: 0 },
        tipRewardId: 'tip_uong_nuoc_am_chia_nho',
        outcomeText: 'Cơ thể hấp thu nước êm dịu, không hề bị tức ngực hay đau bụng.',
      },
      {
        id: 'a_bt_c2',
        text: 'Tu ừng ực hết sạch nửa bình nước lạnh trong khi đang thở dốc',
        attributeEffects: { health: -6, morale: -3, reputation: 0, money: 0 },
        outcomeText: 'Bị nấc cụt liên hồi và tức bụng suốt nửa tiếng sau đó, đi lại rất nặng nề khó chịu.',
      },
      {
        id: 'a_bt_c3',
        text: 'Nghỉ ngơi thả lỏng 2 phút cho nhịp thở ổn định rồi mới mở bình uống từng ngụm nhỏ',
        attributeEffects: { health: 5, morale: 5, reputation: 3, money: 0 },
        outcomeText: 'Cơ thể hồi phục thể lực nhanh chóng, nhịp tim trở lại bình thường êm ái.',
      },
    ],
  },
  {
    id: 'a_lan_le_quan_phuc_bun',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Vệ sinh & Kỷ luật',
    topic: 'tactics',
    title: 'Quân phục lấm lem bùn đất sau giờ trườn bò',
    narrative: 'Lăn lê bò toài ngoài bãi đất đỏ, quần áo dính đầy bùn đất mà quân trang chỉ có 2 bộ luân phiên.',
    speaker: {
      name: 'An',
      role: 'Lớp phó',
      avatarId: 'an',
      mood: 'normal',
    },
    dialogue: 'Giặt ngay đi cậu, đất đỏ khô cứng lại là hôm sau ngứa ngáy không chịu nổi đâu!',
    backgroundType: 'wash',
    choices: [
      {
        id: 'a_ll_c1',
        text: 'Về phòng giặt ngay và vắt thật kiệt phơi lên dây số 3 để kịp khô cho sáng mai',
        attributeEffects: { health: 4, morale: 4, reputation: 10, money: 0 },
        tipRewardId: 'tip_giat_quan_ao_ngay_khi_tam',
        inventoryRewardId: 'bot_giat_goi_nho',
        outcomeText: 'Hôm sau bạn có bộ đồ sạch thơm tho để mặc, được bạn bè khen ngợi tác phong sạch sẽ.',
      },
      {
        id: 'a_ll_c2',
        text: 'Lười giặt, treo tạm lên móc định bụng mặc lại ngày mai cho đỡ bẩn đồ mới',
        attributeEffects: { health: -15, morale: -8, reputation: -8, money: 0 },
        outcomeText: 'Mùi mồ hôi và bùn đất bốc lên khiến cả phòng biểu tình, hôm sau mặc vào da bị mẩn ngứa khó chịu!',
      },
      {
        id: 'a_ll_c3',
        text: 'Ngâm xà phòng 15 phút rồi rủ bạn cùng phòng giặt chung một mẻ vắt kiệt',
        attributeEffects: { health: 3, morale: 6, reputation: 8, money: 0 },
        outcomeText: 'Vết bùn đất biến mất sạch bóng, tinh thần đồng đội giặt giũ vui vẻ rôm rả.',
      },
    ],
  },
  {
    id: 'a_sjc_xit_chong_nang',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'sjc_item_event',
    topic: 'sjc_sunscreen',
    title: '[CHIỀU] Nắng rát thao trường & Xịt chống nắng SJC',
    narrative: '13:45 chiều, trung đội tập trung ra bãi tập ngoài trời. Nắng rát như đổ lửa, bạn cùng phòng nhăn nhó lo bị rát da, cháy nắng.',
    speaker: {
      name: 'Linh',
      role: 'Bạn học',
      avatarId: 'linh',
      mood: 'worried',
    },
    dialogue: 'Nắng gắt 38 độ thế này tập bắn súng ngoài bãi là cháy đen sạm da mất, rát buốt quá cậu ơi!',
    backgroundType: 'outdoor',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'a_sjc_xcn_c1',
        text: 'Lấy chai Xịt chống nắng SJC xịt một lớp sương bảo vệ mát rượi lên mặt, cổ và chia sẻ xịt cho cả bạn cùng hàng',
        attributeEffects: { health: 3, morale: 6, reputation: 8, money: 0 },
        tipRewardId: 'tip_chong_say_nang_thao_truong',
        inventoryRewardId: 'sjc_xit_chong_nang',
        outcomeText: 'Lớp sương chống nắng SPF 50 tạo màng chắn làm mát dịu làn da tức thì, đồng đội trầm trồ cảm kích sự chu đáo chuẩn phong cách sinh viên Báo chí!',
      },
      {
        id: 'a_sjc_xcn_c2',
        text: 'Phơi trần mặt và cánh tay dưới cái nắng 38 độ của đồi Hòa Lạc suốt 3 tiếng buổi chiều',
        attributeEffects: { health: -12, morale: -6, reputation: 0, money: 0 },
        outcomeText: 'Da mặt và gáy bị cháy nắng đỏ rát phồng rộp, tối về tắm nước rát buốt không ngủ nổi!',
      },
      {
        id: 'a_sjc_xcn_c3',
        text: 'Dùng khăn mặt che tạm lên gáy và kéo thấp vành mũ cối để trốn bớt ánh nắng gay gắt',
        attributeEffects: { health: -4, morale: -2, reputation: 1, money: 0 },
        outcomeText: 'Hạn chế được một phần nắng chiếu vào gáy nhưng mồ hôi ứ đọng lại dưới khăn gây ngứa ngáy bức bối.',
      },
    ],
  },
  {
    id: 'a_sjc_binh_giu_nhiet',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'sjc_item_event',
    topic: 'sjc_thermos',
    title: '[CHIỀU] Thao trường khát cháy & Bình giữ nhiệt SJC',
    narrative: '15:30 ngoài bãi huấn luyện bắn súng, cái nóng như thiêu như đốt khiến ai nấy đều cạn kiệt năng lượng và khát khô cổ họng.',
    speaker: {
      name: 'Huy',
      role: 'Bạn cùng phòng',
      avatarId: 'huy',
      mood: 'worried',
    },
    dialogue: 'Cổ họng tớ khô khốc rát bỏng rồi, bình tông nước quân nhu đã hết veo từ lúc nào...',
    backgroundType: 'outdoor',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'a_sjc_bgn_c1',
        text: 'Mở chiếc Bình giữ nhiệt SJC rót ngụm nước mát lạnh sảng khoái và chia sẻ một phần cho đồng đội đang lả đi vì khát',
        attributeEffects: { health: 5, morale: 7, reputation: 8, money: 0 },
        tipRewardId: 'tip_uong_nuoc_am_chia_nho',
        inventoryRewardId: 'sjc_binh_giu_nhiet',
        outcomeText: 'Dòng nước mát lạnh giữ nhiệt hoàn hảo như nguồn suối hồi sinh thể lực, bạn và các đồng chí lấy lại năng lượng hoàn thành xuất sắc bài ngắm bắn!',
      },
      {
        id: 'a_sjc_bgn_c2',
        text: 'Uống vội nước đọng từ vòi công cộng chưa qua đun sôi lọc sạch ở rìa bãi tập',
        attributeEffects: { health: -10, morale: -4, reputation: -2, money: 0 },
        outcomeText: 'Nước lã nhiễm khuẩn làm bụng bạn quặn thắt dữ dội, phải xin phép ra trạm y tế nằm nghỉ!',
      },
      {
        id: 'a_sjc_bgn_c3',
        text: 'Cắn răng chịu đựng cơn khát, cố gắng nuốt nước bọt và chờ hết giờ tập mới về phòng',
        attributeEffects: { health: -5, morale: -3, reputation: 1, money: 0 },
        outcomeText: 'Cổ họng khô rát, bước chân nặng trĩu nhưng sự kiên cường giúp bạn trụ vững tới khi tiếng còi giải tán vang lên.',
      },
    ],
  },
  {
    id: 'a_sjc_khan_lanh',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'sjc_item_event',
    topic: 'sjc_cold_towel',
    title: '[CHIỀU] Hạ nhiệt khẩn cấp sau bài chạy & Khăn lạnh SJC',
    narrative: 'Hoàn thành bài chạy vũ trang 1500m quanh đồi, mồ hôi nhễ nhại, tim đập thình thịch, hơi nóng bốc lên ngùn ngụt khắp người.',
    speaker: {
      name: 'Minh',
      role: 'Bạn cùng phòng',
      avatarId: 'minh',
      mood: 'worried',
    },
    dialogue: 'Thở không ra hơi rồi cậu ơi! Tim tớ đập như đánh trống, người nóng bừng như lò than!',
    backgroundType: 'outdoor',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'a_sjc_kl_c1',
        text: 'Lấy chiếc Khăn lạnh SJC đắp lên trán và sau gáy, giúp hạ thân nhiệt tức thì, xua tan cảm giác say nắng',
        attributeEffects: { health: 6, morale: 8, reputation: 4, money: 0 },
        tipRewardId: 'tip_an_sang_du_nang_luong',
        inventoryRewardId: 'sjc_khan_lanh',
        outcomeText: 'Cảm giác mát lạnh sảng khoái lan tỏa khắp các dây thần kinh, điều hòa thân nhiệt an toàn và đẩy lùi nguy cơ sốc nhiệt!',
      },
      {
        id: 'a_sjc_kl_c2',
        text: 'Đứng thẳng trước luồng gió quạt công suất lớn đang thốc ngược để hong khô mồ hôi',
        attributeEffects: { health: -8, morale: -3, reputation: -1, money: 0 },
        outcomeText: 'Gió thốc đột ngột khi lỗ chân lông đang giãn nở khiến bạn bị trúng gió, cảm lạnh và đau đầu dữ dội.',
      },
      {
        id: 'a_sjc_kl_c3',
        text: 'Dùng vạt áo quân phục lau vội mồ hôi rồi ngồi bệt xuống nền đất cát thở dốc',
        attributeEffects: { health: -2, morale: 1, reputation: 0, money: 0 },
        outcomeText: 'Cơ thể hạ nhiệt dần nhưng áo ướt sũng dính chặt vào lưng đất cát gây dính nhớp khó chịu.',
      },
    ],
  },
  // --- TÌNH HUỐNG MÙA HÈ HÒA LẠC MỚI (EXPANSION) ---
  {
    id: 'a_cang_tin_giai_lao_nuoc_mia',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Ăn uống & Sinh hoạt',
    topic: 'canteen_packaged_drinks',
    title: '[CHIỀU] Giờ giải lao 15 phút: Mua nước khoáng đóng chai & Kem que giải nhiệt ở tiệm tạp hóa',
    narrative: '15:00 chiều giải lao giữa giờ bắn súng, cái nóng hầm hập 36 độ khiến cổ họng khô khốc. Cả trung đội tranh thủ ghé tiệm tạp hóa căng-tin dưới tán cây xà cừ. Tủ bảo ôn mát lạnh chật kín các chai nước khoáng, trà xanh đóng chai và những que kem mát rượi giúp xua tan cơn khát.',
    speaker: {
      name: 'Cô Bán Căng-tin',
      role: 'Chủ tiệm tạp hóa',
      avatarId: 'roommate',
      mood: 'smile',
    },
    dialogue: 'Tủ lạnh có đủ nước khoáng đóng chai ướp lạnh, nước ngọt có ga và kem que mát đây các cháu! Đứng gọn vào xếp hàng lần lượt cô lấy cho nhé!',
    backgroundType: 'canteen',
    choices: [
      {
        id: 'a_ctg_c1',
        text: 'Kiên nhẫn xếp hàng văn minh, mua một chai nước khoáng đóng chai ướp lạnh và que kem que mát rượi hạ nhiệt',
        attributeEffects: { health: 3, morale: 8, reputation: 5, money: -15000 },
        tipRewardId: 'tip_uong_nuoc_am_chia_nho',
        outcomeText: 'Vị mát lạnh sảng khoái xua tan ngay cơn khát cháy bỏng, cơ thể hồi phục năng lượng cho giờ tập sau.',
      },
      {
        id: 'a_ctg_c2',
        text: 'Chen lấn xô đẩy lên phía trước để với tay mở tủ mát làm rơi các chai nước trên kệ tạp hóa',
        attributeEffects: { health: 0, morale: -5, reputation: -9, money: -15000 },
        outcomeText: 'Bạn bị các đồng đội xung quanh nhắc nhở về ý thức văn hóa xếp hàng, phải bẽ bàng nhặt lại đồ lên kệ.',
      },
      {
        id: 'a_ctg_c3',
        text: 'Mua thêm 2 chai nước khoáng ướp lạnh đóng chai mang về chia cho các bạn trực gác súng ngoài thao trường',
        attributeEffects: { health: 1, morale: 10, reputation: 9, money: -20000 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Sự quan tâm chu đáo khiến đồng đội trực gác xúc động vô cùng, tình bạn quân ngũ thêm bền chặt!',
      },
    ],
  },
  {
    id: 'a_mua_dong_he_hoa_lac',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Thời tiết & Môi trường',
    topic: 'summer_thunderstorm_laundry',
    title: '[CHIỀU] Cơn mưa dông hè bất chợt & Chạy đua thu dọn quần áo ngoài ban công 3 dây thép',
    narrative: '16:00 chiều, bầu trời Hòa Lạc bỗng chốc sầm sì đen kịt, gió bão rít từng cơn cuốn bụi mù mịt báo hiệu cơn dông hè sắp ập tới. Quần áo của cả phòng đang phơi ngoài 3 dây thép ban công có nguy cơ bị gió giật bay hoặc mưa tạt ướt sũng!',
    speaker: {
      name: 'An',
      role: 'Lớp phó',
      avatarId: 'an',
      mood: 'worried',
    },
    dialogue: 'Mưa dông to đến nơi rồi! Cả phòng mau ra ban công gỡ nhanh quần áo trên 3 dây phơi đưa vào phòng kẻo ướt sũng!',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'a_mdh_c1',
        text: 'Nhanh tay cùng các bạn trong phòng ra ban công gỡ nhanh toàn bộ quần áo trên 3 dây phơi đưa vào phòng an toàn',
        attributeEffects: { health: -1, morale: 8, reputation: 10, money: 0 },
        tipRewardId: 'tip_phoi_do_san_thuong_3_day',
        outcomeText: 'Cơn mưa vừa trút xuống thì quần áo khô ráo đã được cất an toàn trong phòng, cả phòng thở phào biết ơn bạn!',
      },
      {
        id: 'a_mdh_c2',
        text: 'Mải nằm trong phòng lướt xem tài liệu vì nghĩ ban công có che chắn, gió tạt mưa làm ướt sũng toàn bộ quân phục',
        attributeEffects: { health: -2, morale: -7, reputation: -6, money: 0 },
        outcomeText: 'Quần áo bị mưa tạt ướt đẫm phải giặt lại từ đầu, tối không có đồ khô để thay đi điểm danh!',
      },
      {
        id: 'a_mdh_c3',
        text: 'Chủ động ôm gom hết đồ khô đưa vào phòng, dùng kẹp cố định các móc đồ còn ẩm áp sát vào góc tường chắn gió',
        attributeEffects: { health: 0, morale: 9, reputation: 9, money: 0 },
        tipRewardId: 'tip_vat_do_kho_nhanh',
        outcomeText: 'Hành động bình tĩnh, khoa học giúp bảo toàn toàn bộ trang phục của phòng nguyên vẹn trước cơn dông.',
      },
    ],
  },
  {
    id: 'a_tam_giat_gio_cao_diem',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Sinh hoạt tập thể',
    topic: 'rush_hour_shower',
    title: '[CHIỀU] Giờ tắm giặt cao điểm 17h00 & Vòi sen chảy yếu phòng khép kín',
    narrative: '17:00 tan ca tập chiều, mồ hôi bụi bặm dính đầy người, 14 sinh viên cùng về phòng khép kín để tắm giặt. Do giờ cao điểm toàn khu nhà đồng loạt dùng nước nên áp lực nước từ bồn tổng bị yếu dần, vòi sen chảy chậm và cần đặc biệt lưu ý tắt aptomat bình nóng lạnh trước khi bước vào tắm.',
    speaker: {
      name: 'Minh',
      role: 'Bạn cùng phòng',
      avatarId: 'minh',
      mood: 'smile',
    },
    dialogue: 'Nước giờ cao điểm chảy hơi yếu và nhớ tắt aptomat bình nóng lạnh an toàn nhé! Chúng mình chia ca: ai giặt đồ ở bồn trước, ai tắm trước rồi vắt kiệt đem phơi ban công!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'a_tgc_c1',
        text: 'Thống nhất phân chia ca hợp lý, nhớ tắt aptomat bình nóng lạnh an toàn, tắm nhanh 7 phút và vắt kiệt đồ mang ra ban công phơi',
        attributeEffects: { health: 4, morale: 7, reputation: 8, money: 0 },
        tipRewardId: 'tip_tam_giat_gio_cao_diem',
        outcomeText: 'Sạch sẽ sảng khoái! Tác phong khẩn trương giúp cả phòng 14 người đều kịp tắm giặt trước giờ cơm chiều.',
      },
      {
        id: 'a_tgc_c2',
        text: 'Chiếm buồng tắm xả tràn bồn nước, quên không tắt aptomat an toàn làm cả phòng lo lắng nhắc nhở',
        attributeEffects: { health: -1, morale: -5, reputation: -7, money: 0 },
        outcomeText: 'Vừa gây nguy cơ mất an toàn điện vừa khiến các bạn xếp hàng chờ đợi bức xúc!',
      },
      {
        id: 'a_tgc_c3',
        text: 'Tranh thủ giặt trước bộ quân phục tại bồn giặt trong phòng, vắt kiệt treo đúng quy chuẩn 3 dây ban công rồi chờ nước mạnh mới tắm',
        attributeEffects: { health: 2, morale: 6, reputation: 8, money: 0 },
        tipRewardId: 'tip_vat_do_kho_nhanh',
        outcomeText: 'Sắp xếp thời gian thông minh giúp bạn hoàn thành mọi việc chỉn chu mà không phải chen chúc.',
      },
    ],
  },
  {
    id: 'a_ve_keu_trua_he',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Đời sống chiến sĩ',
    topic: 'cicadas_summer_noon',
    title: '[CHIỀU] Tiếng ve kêu râm ran trưa hè trên đồi thông làm trăn trở giấc ngủ trưa',
    narrative: '12:45 trưa hè oi ả, quạt trần quay vù vù thổi luồng gió nóng. Trên những rặng thông ven đồi, đàn ve kêu râm ran như bản đồng ca bất tận. Nằm trên giường tầng gỗ cứng, giấc ngủ trưa khó đến trong khi chiều còn bài huấn luyện thể lực.',
    speaker: {
      name: 'Huy',
      role: 'Bạn cùng phòng',
      avatarId: 'huy',
      mood: 'worried',
    },
    dialogue: 'Ve kêu inh ỏi nhức đầu quá không chợp mắt nổi! Chiều nay lại chạy 3000 mét nữa chứ...',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'a_vkh_c1',
        text: 'Kéo nhẹ rèm cửa che bớt ánh nắng chói chang, nhắm mắt tĩnh tâm hít thở sâu để chìm vào giấc ngủ ngắn 30 phút',
        attributeEffects: { health: 4, morale: 7, reputation: 5, money: 0 },
        tipRewardId: 'tip_ngu_trua_hoi_phuc',
        outcomeText: 'Giấc ngủ trưa quý giá giúp não bộ được nạp lại năng lượng, tỉnh táo hoàn toàn khi tiếng còi 13:30 vang lên.',
      },
      {
        id: 'a_vkh_c2',
        text: 'Bực dọc trở mình liên tục trên giường gỗ cọt kẹt làm các bạn giường bên cũng mất ngủ theo',
        attributeEffects: { health: -3, morale: -5, reputation: -4, money: 0 },
        outcomeText: 'Đầu óc lừ đừ mệt mỏi, buổi chiều ra thao trường chạy thể lực chân tay bủn rủn.',
      },
      {
        id: 'a_vkh_c3',
        text: 'Bật chiếc quạt tích điện mini cầm tay để sát đầu giường tạo làn gió mát êm dịu dễ ngủ',
        attributeEffects: { health: 3, morale: 8, reputation: 6, money: 0 },
        tipRewardId: 'tip_chuan_bi_tu_toi_hom_truoc',
        outcomeText: 'Làn gió mát từ chiếc quạt mini xua tan oi bức, giúp bạn có giấc ngủ trưa êm ái thư thái.',
      },
    ],
  },
  {
    id: 'a_chup_anh_trend_tiktok',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Văn hóa & Giải trí',
    topic: 'tiktok_trend_break',
    title: '[CHIỀU] Tranh thủ giờ giải lao quay clip bắt trend vũ điệu chiến sĩ thao trường',
    narrative: '15:20 chiều, trong 15 phút giải lao trên bãi cỏ thao trường, mấy bạn sinh viên Báo chí rủ nhau quay một clip TikTok vui nhộn nhảy theo điệu nhạc quân ngũ để lưu giữ kỷ niệm tuổi 20 rực rỡ.',
    speaker: {
      name: 'Mai',
      role: 'Cây văn nghệ SJC',
      avatarId: 'linh',
      mood: 'laugh',
    },
    dialogue: 'Cả nhóm vào đây xếp hàng nào! Nhảy điệu chiến sĩ hành quân 15 giây thôi là lên xu hướng triệu view ngay!',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'a_cat_c1',
        text: 'Nhiệt tình tham gia nhảy đồng diễn vui vẻ, giữ đúng tác phong quân phục chỉnh tề đẹp mắt',
        attributeEffects: { health: 1, morale: 10, reputation: 8, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Tiếng cười giòn tan xua tan mệt mỏi! Đoạn clip được các bạn khen ngợi vì năng lượng thanh xuân tích cực.',
      },
      {
        id: 'a_cat_c2',
        text: 'Nghịch ngợm tạo dáng phản cảm, cởi cúc áo quân phục làm trò lố lăng trên video',
        attributeEffects: { health: 0, morale: -4, reputation: -12, money: 0 },
        outcomeText: 'Trực ban phát hiện nhắc nhở nghiêm khắc vì làm ảnh hưởng đến hình tượng trang nghiêm của người lính.',
      },
      {
        id: 'a_cat_c3',
        text: 'Ngồi dưới bóng cây cổ vũ, chụp lại những bức ảnh khoảnh khắc tự nhiên đầy cảm xúc cho bạn bè',
        attributeEffects: { health: 1, morale: 7, reputation: 7, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Những góc máy đẹp chuẩn dân Báo chí ghi lại trọn vẹn kỷ niệm đẹp đẽ của mùa hè Hòa Lạc.',
      },
    ],
  },
  {
    id: 'a_nham_lan_quan_phuc_san_phoi',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Đời sống tân binh',
    topic: 'lost_uniform_mixup',
    title: '[CHIỀU] Cầm nhầm quân phục trên dây phơi ban công & Hành trình tìm chiếc quần size 3',
    narrative: '17:45 chiều, ra ban công phòng lấy đồ thì bạn tá hỏa nhận ra chiếc quần quân phục của mình đã bị bạn cùng phòng cầm nhầm, trên dây chỉ còn sót lại một chiếc quần số 1 quá chật không có tên. Sắp đến giờ cơm và chuẩn bị nộp điện thoại nề nếp!',
    speaker: {
      name: 'Linh',
      role: 'Bạn cùng phòng',
      avatarId: 'linh',
      mood: 'worried',
    },
    dialogue: 'Chắc lúc thu đồ ngoài ban công ai vội quá cầm nhầm rồi! Cậu có đánh dấu tên vào mác quần như cẩm nang dặn không?',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'a_nlq_c1',
        text: 'Nhờ bút bi đã ghi rõ họ tên vào mác quần từ trước, bạn hỏi các bạn cùng phòng và đổi lại đúng chiếc quần của mình',
        attributeEffects: { health: 0, morale: 8, reputation: 9, money: 0 },
        tipRewardId: 'tip_danh_dau_quan_phuc',
        outcomeText: 'Đổi lại được ngay trong phòng do bạn cùng phòng cầm nhầm! Bạn nhận lại đồ nguyên vẹn trong tiếng cười ríu rít.',
      },
      {
        id: 'a_nlq_c2',
        text: 'Mặc đại chiếc quần số 1 chật ních, lúc ngồi xuống bị bục chỉ và bị thầy chỉ huy nhắc nhở tác phong',
        attributeEffects: { health: -1, morale: -6, reputation: -7, money: -20000 },
        outcomeText: 'Quần rách chỉ phải mang đi thuê khâu lại, vừa tốn tiền vừa mất điểm tác phong quân nhân!',
      },
      {
        id: 'a_nlq_c3',
        text: 'Mang chiếc quần số 1 hỏi từng giường trong phòng, vừa tìm lại được quần vừa đổi trả cho bạn cầm nhầm',
        attributeEffects: { health: 0, morale: 9, reputation: 10, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Hóa ra bạn ấy cũng đang loay hoay tìm quần của mình. Sự chu đáo giúp cả hai giải quyết êm đẹp trong nháy mắt.',
      },
    ],
  },
  {
    id: 'a_keo_co_hoi_thao',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Thể thao phong trào',
    topic: 'tug_of_war_match',
    title: '[CHIỀU] Giải thi đấu kéo co giao hữu giữa các trung đội giờ hoạt động thể thao 16h45',
    narrative: '16:45 chiều, ánh hoàng hôn nhuộm vàng sân bóng đá. Đoàn thanh niên tổ chức giải kéo co giao hữu giữa Trung đội 1 và Trung đội 2. Sợi dây thừng to bản đặt giữa vạch vôi, tiếng trống gõ dồn dập cùng hàng trăm tiếng hò reo cổ vũ rung chuyển cả góc đồi.',
    speaker: {
      name: 'Thầy Bí thư Đoàn',
      role: 'Trọng tài hội thao',
      avatarId: 'commander',
      mood: 'laugh',
    },
    dialogue: 'Hai đội chuẩn bị! Cầm chắc dây, chân ghim chặt mặt đất! Trọng tài chuẩn bị còi... BẮT ĐẦU!',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'a_kch_c1',
        text: 'Đứng vị trí số 1 khóa đuôi, ngả người 45 độ, hô vang nhịp 1 - 2 cùng đồng đội kéo dồn tổng lực',
        attributeEffects: { health: -2, morale: 12, reputation: 10, money: 0 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Chiến thắng nghẹt thở! Cả trung đội ôm chầm lấy nhau ăn mừng tưng bừng, tinh thần đoàn kết thăng hoa rực rỡ.',
      },
      {
        id: 'a_kch_c2',
        text: 'Nắm dây lỏng lẻo, giật mạnh đột ngột khiến dây trượt khỏi tay làm xước lòng bàn tay',
        attributeEffects: { health: -5, morale: -3, reputation: 0, money: 0 },
        outcomeText: 'Lực kéo bị đứt đoạn khiến đội bị đối phương kéo phăng qua vạch, lòng bàn tay rát bỏng vì ma sát.',
      },
      {
        id: 'a_kch_c3',
        text: 'Làm trưởng ban cổ động, cầm chai nước gõ nhịp và bắt giọng cổ vũ cuồng nhiệt cho cả đội',
        attributeEffects: { health: 0, morale: 9, reputation: 8, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Tiếng hô cổ vũ hào sảng tiếp thêm 200% sức mạnh cho đồng đội lội ngược dòng ngoạn mục!',
      },
    ],
  },
  {
    id: 'a_tam_giat_xep_hang_nuoc_gieng',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Sinh hoạt cá nhân',
    topic: 'shower_laundry_peak_hours',
    title: '[CHIỀU] Giờ tắm giặt 17h00: Khắc phục sự cố vòi xả yếu & Quy chuẩn phơi đồ ban công',
    narrative: '17:00 chiều, toàn đại đội tan giờ rèn luyện thao trường. Về đến phòng khép kín, vòi nước bồn rửa bỗng bị hụt áp do bồn chứa tổng đang bơm bổ sung. Phòng 14 người cần điều tiết nước khéo léo, phối hợp hứng xô chậu và tuân thủ quy tắc tắt aptomat bình nóng lạnh trước khi tắm.',
    speaker: {
      name: 'Mai',
      role: 'Đồng đội cùng phòng',
      avatarId: 'linh',
      mood: 'smile',
    },
    dialogue: 'Bồn tổng đang bơm nước nên vòi chảy hơi nhỏ một chút! Chúng mình chia nhau hứng xô chậu trong nhà tắm rồi giặt sạch, vắt kiệt treo ra ban công nhé!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'a_tgx_c1',
        text: 'Chủ động phối hợp hứng nước nhẹ nhàng vào xô chậu, giặt sạch bùn đất rồi vắt kiệt phơi ra 3 dây ban công theo thứ tự',
        attributeEffects: { health: 3, morale: 8, reputation: 9, money: 0 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Sự tự giác và ăn ý giúp cả phòng 14 người đều tắm giặt sạch sẽ tinh tươm trước giờ cơm chiều!',
      },
      {
        id: 'a_tgx_c2',
        text: 'Vặn giật mạnh van khóa nước làm rò rỉ khớp nối, khiến sàn phòng tắm bị ứ đọng nước',
        attributeEffects: { health: -1, morale: -4, reputation: -6, money: 0 },
        outcomeText: 'Sàn phòng tắm trơn trượt bị trực ban phòng nhắc nhở phải ở lại lau chùi đến sạch bong.',
      },
      {
        id: 'a_tgx_c3',
        text: 'Nhắc nhở cả phòng tắt aptomat bình nóng lạnh an toàn, nhường lượt dùng buồng tắm trước cho các bạn vừa trườn bò thao trường',
        attributeEffects: { health: 2, morale: 9, reputation: 11, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Tinh thần nhường nhịn và ý thức an toàn của bạn được cả phòng khen ngợi, tình đồng đội thêm gắn kết!',
      },
    ],
  },
  {
    id: 'a_cang_tin_mua_do_an_vat',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Căng-tin giải lao',
    topic: 'canteen_afternoon_treats',
    title: '[CHIỀU] 15 phút giải lao căng-tin: Kem que mát lạnh, bim bim và nước khoáng ướp lạnh',
    narrative: '15:15 chiều, tiếng còi giải lao giữa giờ vang lên giòn giã. Quầy tạp hóa căng-tin tấp nập tiếng cười nói của sinh viên chọn mua kem que đóng gói mát lạnh, bim bim giòn tan, xúc xích tiệt trùng ăn liền và nước khoáng đóng chai giải nhiệt sau giờ rèn luyện nắng gắt.',
    speaker: {
      name: 'Huy',
      role: 'Cây hài phòng',
      avatarId: 'huy',
      mood: 'laugh',
    },
    dialogue: 'Làm que kem sô-cô-la mát rượi với chai nước khoáng ướp lạnh là cả tiểu đội hồi sức ngay tức thì bạn ơi!',
    backgroundType: 'canteen',
    choices: [
      {
        id: 'a_ctm_c1',
        text: 'Mua một que kem que mát lạnh cùng chai nước khoáng ướp lạnh chia sẻ cùng bạn thân',
        attributeEffects: { health: 2, morale: 10, reputation: 8, money: -25000 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Cơn khát tan biến, năng lượng tràn trề cùng những tiếng cười rôm rả tiếp sức cho các tiết học tiếp theo.',
      },
      {
        id: 'a_ctm_c2',
        text: 'Ăn quá nhiều bim bim và nước ngọt có gas sát giờ tập trung làm bụng ậm ạch khó chịu',
        attributeEffects: { health: -3, morale: -2, reputation: 0, money: -45000 },
        outcomeText: 'Bụng dạ cồn cào vì đồ ngọt, bạn bước vào tiết thực hành ngắm bắn trong trạng thái mệt mỏi.',
      },
      {
        id: 'a_ctm_c3',
        text: 'Chọn một chai nước suối ướp lạnh và gói xúc xích ăn liền, ra ghế đá tán cây thông hóng mát và trò chuyện',
        attributeEffects: { health: 3, morale: 8, reputation: 9, money: -10000 },
        tipRewardId: 'tip_uong_nuoc_am_chia_nho',
        outcomeText: 'Cơ thể nhẹ nhõm sảng khoái, bạn còn được thầy giáo chia sẻ thêm nhiều kinh nghiệm sống quý giá!',
      },
    ],
  },
  {
    id: 'a_tap_ngam_ban_ak_sung_nang',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Kỹ thuật bắn súng',
    topic: 'ak47_rifle_aiming_practice',
    title: '[CHIỀU] Thực hành nằm ngắm bắn súng tiểu liên AK bãi tập nắng gay gắt',
    narrative: '14:30 chiều hè, mặt đất thao trường hấp thụ ánh nắng bỏng rát. Khẩu súng tiểu liên AK kim loại nặng gần 4kg trên tay bạn. Thử thách nheo một mắt, canh đường ngắm cơ bản qua khe ngắm tới đỉnh đầu ngắm và điểm ngắm trên bia số 4.',
    speaker: {
      name: 'Thầy Giáo viên Quân sự',
      role: 'Chỉ huy bắn tập',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Đầu ngắm phải nằm chính giữa và ngang bằng với mép trên khe ngắm! Nín thở êm, bóp cò từ từ bằng đốt thứ nhất ngón trỏ!',
    backgroundType: 'outdoor',
    choices: [
      {
        id: 'a_tnb_c1',
        text: 'Áp má tì vai chuẩn chỉ, điều hòa nhịp thở êm đềm, nín thở rê nhẹ cò súng giữ đường ngắm tuyệt đối ổn định',
        attributeEffects: { health: 1, morale: 10, reputation: 10, money: 0 },
        tipRewardId: 'tip_an_toan_thao_truong',
        outcomeText: 'Đường ngắm chuẩn xác như thước đo! Thầy kiểm tra ống ngắm kiểm tra và khen ngợi tư thế bắn kiểu mẫu!',
      },
      {
        id: 'a_tnb_c2',
        text: 'Gồng cứng cơ cổ và mắt nhìn căng thẳng liên tục không chớp làm mắt mờ hoa đi',
        attributeEffects: { health: -2, morale: -4, reputation: -2, money: 0 },
        outcomeText: 'Mắt bị mỏi nhừ và chảy nước mắt, bạn phải rời tuyến bắn ra khu vực nghỉ để nhỏ mắt phục hồi thị lực.',
      },
      {
        id: 'a_tnb_c3',
        text: 'Kê thêm chiếc khăn bông SJC dưới cùi chỏ tay trái đỡ đau rát khi tì đè trên sỏi đá thao trường',
        attributeEffects: { health: 2, morale: 7, reputation: 7, money: 0 },
        tipRewardId: 'tip_danh_dau_quan_phuc',
        outcomeText: 'Sáng kiến giữ cùi chỏ êm ái giúp bạn duy trì tư thế nằm bắn vững chãi suốt 45 phút thực hành!',
      },
    ],
  },
  {
    id: 'a_ve_keu_dong_he_nghi_trua',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'Đời sống tân binh',
    topic: 'cicadas_summer_noon_rest',
    title: '[CHIỀU] Tiếng ve kêu râm ran trưa hè trên đồi thông & Giấc ngủ trưa quý báu',
    narrative: '12:30 trưa, cái nóng đỉnh điểm của trưa hè miền đồi núi Hòa Lạc. Ngoài ô cửa sổ, hàng ngàn chú ve trên rặng thông hòa tấu bản giao hưởng mùa hè bất tận. Cả phòng 14 người nằm trên phản gỗ, từng luồng gió mát luồn qua rèm cửa.',
    speaker: {
      name: 'Bạn cùng phòng',
      role: 'Đồng đội nằm phản',
      avatarId: 'roommate',
      mood: 'smile',
    },
    dialogue: 'Tiếng ve kêu râm ran thế này ban đầu hơi lạ tai nhưng nghe quen lại thấy như tiếng ru ngủ êm đềm...',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'a_vkd_c1',
        text: 'Bật quạt tích điện mini ở mức gió thoảng nhẹ, thả lỏng toàn thân chìm vào giấc ngủ trưa sâu 40 phút',
        attributeEffects: { health: 6, morale: 7, reputation: 5, money: 0 },
        tipRewardId: 'tip_tat_den_dung_gio',
        outcomeText: 'Tỉnh dậy lúc 13:15 đầu óc tỉnh táo minh mẫn lạ thường, sẵn sàng 100% năng lượng cho buổi học chiều!',
      },
      {
        id: 'a_vkd_c2',
        text: 'Thao thức lướt điện thoại giấu dưới gối làm trôi mất giấc ngủ trưa quý giá',
        attributeEffects: { health: -4, morale: -5, reputation: -3, money: 0 },
        outcomeText: 'Cả buổi chiều học lý luận mắt díp lại vì thiếu ngủ, ngáp ngắn ngáp dài bị thầy giáo nhắc nhở.',
      },
      {
        id: 'a_vkd_c3',
        text: 'Cùng các bạn trong phòng mở hé cửa sổ hai đầu tạo luồng gió đối lưu mát rượi tự nhiên cho cả phòng',
        attributeEffects: { health: 4, morale: 8, reputation: 8, money: 0 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        outcomeText: 'Căn phòng mát rượi hương thông rừng, cả 14 thành viên đều có giấc ngủ trưa thật ngon lành!',
      },
    ],
  },
];

export const EVENING_SITUATIONS: StoryEvent[] = [
  {
    id: 'e_tap_trung_muon_2030',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Kỷ luật & Điểm danh',
    topic: 'late_assembly_2030',
    title: '[TỐI 20:30] Điểm danh giao ban đại đội dưới sân chào cờ & Chấn chỉnh tác phong',
    narrative: '20:30 là giờ toàn đại đội tập trung dưới sân chào cờ nghe giao ban và điểm danh tập trung (sau giờ thu nộp điện thoại 20:20). Một số phòng lề mề đi vệ sinh muộn khiến hàng ngũ đại đội xếp nhấp nhô, trễ mất 10 phút. Thầy đại đội trưởng mặt đanh lại, nổi giận chấn chỉnh tác phong kỷ luật thép!',
    speaker: {
      name: 'Thầy Đại đội trưởng',
      role: 'Chỉ huy Đại đội',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Các đồng chí coi kỷ luật quân đội là trò đùa à?! 20:30 tập trung dưới sân chào cờ mà 20:40 hàng ngũ vẫn nhấp nhô, thì thào nói chuyện riêng! Toàn đại đội đứng nghiêm 15 phút uốn nắn tác phong!',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'e_ttm_c1',
        text: 'Đứng nghiêm chuẩn chỉ, hai gót chân khép chặt, mắt nhìn thẳng, tự giác chấp hành và giữ bình tĩnh cho cả hàng quân',
        attributeEffects: { reputation: 8, morale: 2, health: -1, money: 0 },
        tipRewardId: 'tip_chap_hanh_lenh_truc_ban',
        outcomeText: 'Tác phong nghiêm túc của bạn lan tỏa sang các đồng chí bên cạnh, hàng ngũ nhanh chóng ngay ngắn thẳng tắp, thầy chỉ huy dịu giọng hạ lệnh cho nghỉ.',
      },
      {
        id: 'e_ttm_c2',
        text: 'Đứng rung đùi, lấm lét liếc nhìn xung quanh rồi lẩm bẩm càu nhàu đổ lỗi cho các phòng bên cạnh làm trễ',
        attributeEffects: { reputation: -10, morale: -6, health: -2, money: 0 },
        outcomeText: 'Ánh mắt nghiêm khắc của thầy chỉ huy quét trúng bạn! Bạn bị nêu tên phê bình trước toàn thể đại đội vì thiếu ý thức tự giác tập thể.',
      },
      {
        id: 'e_ttm_c3',
        text: 'Chủ động dùng khẩu lệnh nhỏ nhắc nhở các bạn trong tiểu đội khẩn trương vào đúng cự ly hàng ngũ, giữ trật tự tuyệt đối',
        attributeEffects: { reputation: 10, morale: 5, health: 0, money: 0 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Tiểu đội của bạn là đơn vị đầu tiên ổn định hàng ngũ chuẩn xác, được thầy ghi nhận tinh thần trách nhiệm đồng đội.',
      },
    ],
  },
  {
    id: 'night_guard_duty',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'military_duty',
    topic: 'night_guard',
    title: 'Ca gác đêm 01:00 sáng & Duy trì an ninh doanh trại',
    narrative: 'Đến ca trực lúc 01:00 sáng (gác cầu thang trong nhà đối với Nữ / gác cổng doanh trại đối với Nam), không gian đêm hè yên ắng và cơn buồn ngủ ập đến dồn dập cùng bạn gác chung.',
    speaker: {
      name: 'Bạn gác chung',
      role: 'Đồng đội trực gác',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Mắt cứ díp lại bạn ơi! Đêm hè yên tĩnh thế này rất dễ ngủ gật, chúng mình phải cố bấm tay đi lại giữ tỉnh táo nhé!',
    backgroundType: 'evening_campus',
    choices: [
      {
        id: 'ngd_c1',
        text: 'Đứng đúng vị trí, trang phục chỉnh tề, bấm ngón tay đi lại tuần tra giữ tỉnh táo cùng bạn gác chung',
        attributeEffects: { reputation: 10, morale: 4, health: -3 },
        tipRewardId: 'tip_chap_hanh_lenh_truc_ban',
        outcomeText: 'Ý chí kiên định và tác phong nghiêm túc giúp ca gác hoàn thành xuất sắc, được chỉ huy đi tuần kiểm tra biểu dương!',
      },
      {
        id: 'ngd_c2',
        text: 'Ngồi thụp vào góc khuất lấy điện thoại ra lướt mạng chống buồn ngủ',
        attributeEffects: { reputation: -12, morale: -4, health: -2 },
        outcomeText: 'Cán bộ đi kiểm tra đột xuất phát hiện ánh sáng màn hình điện thoại trong bóng tối, lập biên bản trừ điểm thi đua!',
      },
      {
        id: 'ngd_c3',
        text: 'Rủ bạn trực cùng thay phiên nhau: một người chợp mắt 20 phút rồi đổi lượt',
        attributeEffects: { reputation: -8, health: 2, morale: -2 },
        outcomeText: 'Cả hai đều ngủ quên và giật mình tỉnh dậy khi trời gần sáng, may mắn không có sự cố nhưng canh cánh nỗi lo bị phát hiện.',
      },
    ],
  },
  {
    id: 'e_nop_dien_thoai_2020',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Kỷ luật & Đồ dùng',
    topic: 'phone',
    title: '20:20 Giờ nộp điện thoại toàn đại đội trước giờ xuống sân điểm danh',
    narrative: '20:20 là giờ thu nộp điện thoại toàn đại đội để niêm phong vào tủ sắt (chỉ nhận lại vào 19:00 tối hôm sau). Đúng 20:30 toàn đại đội phải có mặt tập trung dưới sân chào cờ nghe giao ban điểm danh. Chiếc điện thoại rung lên vì tin nhắn từ gia đình và bạn bè.',
    speaker: {
      name: 'Minh',
      role: 'Trưởng phòng thu máy',
      avatarId: 'minh',
      mood: 'normal',
    },
    dialogue: 'Đúng 20:20 rồi cả phòng ơi, tắt nguồn điện thoại bỏ vào giỏ cho tớ mang nộp đại đội nhé, 20:30 phải có mặt dưới sân chào cờ tập trung rồi!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_ndt_c1',
        text: 'Tắt nguồn, nộp điện thoại đúng giờ cho trưởng phòng, chỉnh đốn trang phục xuống sân chào cờ tập trung điểm danh 20:30',
        attributeEffects: { health: 8, morale: 3, reputation: 6, money: 0 },
        tipRewardId: 'tip_nop_dien_thoai_dung_gio',
        outcomeText: 'Giấc ngủ sâu không bị ánh sáng xanh quấy rầy giúp bạn tràn đầy sinh lực vào sáng hôm sau.',
      },
      {
        id: 'e_ndt_c2',
        text: 'Lén giấu điện thoại 1 đêm dưới gối, trùm chăn bật sáng thấp nhất để lướt mạng, sáng hôm sau dậy muộn mệt mỏi',
        attributeEffects: { health: -15, morale: -5, reputation: -10, money: 0 },
        outcomeText: 'Trực ban đêm đi kiểm tra đột xuất phát hiện ánh sáng màn hình le lói trong màn, lập biên bản tịch thu điện thoại và phê bình trước đại đội!',
      },
      {
        id: 'e_ndt_c3',
        text: 'Chủ động thu gom điện thoại cả phòng mang lên nộp tủ niêm phong đại đội, nhắc nhở mọi người xuống sân tập trung đúng giờ',
        attributeEffects: { health: 5, morale: 5, reputation: 9, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Tác phong gương mẫu được ban chỉ huy đại đội biểu dương trước toàn hàng quân!',
      },
    ],
  },
  {
    id: 'e_truc_gac_dem',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Kỷ luật & Trực ban',
    topic: 'guard',
    title: 'Phiên gác đêm từ 21h30 đến 23h',
    narrative: 'Đến phiên bạn trực ca đêm tại sảnh D2, thời gian từ 21h30 đến 23h00. Không gian tĩnh mịch, gió đồi thổi lành lạnh.',
    speaker: {
      name: 'Cán bộ trực ban',
      role: 'Chỉ huy kiểm tra gác',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Tác phong canh gác của đồng chí phải luôn cảnh giác cao độ, ghi chép sổ trực ban đầy đủ!',
    backgroundType: 'evening_campus',
    choices: [
      {
        id: 'e_tg_c1',
        text: 'Mang trang phục chỉnh tề (quân phục, đi giày), đứng gác nghiêm túc tại sảnh và ghi chép sổ trực',
        attributeEffects: { health: -1, morale: 4, reputation: 12, money: 0 },
        tipRewardId: 'tip_chap_hanh_lenh_truc_ban',
        inventoryRewardId: 'thuoc_xit_con_trung',
        outcomeText: 'Tác phong đĩnh đạc và tinh thần trách nhiệm cao của bạn được cán bộ trực ban biểu dương trong sổ giao ban!',
      },
      {
        id: 'e_tg_c2',
        text: 'Trốn vào góc cầu thang bấm điện thoại và ngủ gật vì nghĩ đêm muộn không ai kiểm tra',
        attributeEffects: { health: -2, morale: -8, reputation: -15, money: 0 },
        outcomeText: 'Bị chỉ huy đi tuần bắt quả tang ngủ gật trong ca trực, bị phạt đứng gác tăng cường ca 2h sáng hôm sau!',
      },
      {
        id: 'e_tg_c3',
        text: 'Mặc áo ấm, đi tuần tra nhẹ nhàng quanh hành lang tầng 1 và bàn giao ca gác đúng giờ',
        attributeEffects: { health: 0, morale: 5, reputation: 10, money: 0 },
        outcomeText: 'Doanh trại an toàn tuyệt đối suốt phiên trực, ca gác sau gửi lời cảm ơn bạn vì sự chu đáo.',
      },
    ],
  },
  {
    id: 'e_chuyen_ma_hola_tat_den',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Sinh hoạt & Tình cảm',
    topic: 'bedtime_story',
    title: '[TỐI] 22:00 Giờ tắt đèn và truyền thuyết đêm Hòa Lạc',
    narrative: 'Kẻng tắt đèn vang lên, bóng tối bao trùm 14 chiếc giường sắt. Giọng kể chuyện thì thầm về những câu chuyện đêm Hòa Lạc khiến cả phòng vừa sợ vừa buồn cười.',
    speaker: {
      name: 'Huy',
      role: 'Cây hài phòng',
      avatarId: 'huy',
      mood: 'laugh',
    },
    dialogue: 'Suỵt! Nghe nói đêm nào ở sân bóng rổ cũng có tiếng đập bóng tưng tưng đấy... Ai dám ra xem không?',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_cmh_c1',
        text: 'Cười đùa tiếp lời vui vẻ vài câu rồi nghiêm túc nhắc cả phòng ngủ sớm lấy sức cho 5h30 sáng mai',
        attributeEffects: { health: 4, morale: 6, reputation: 5, money: 0 },
        tipRewardId: 'tip_tat_den_dung_gio',
        outcomeText: 'Không khí ấm cúng gắn kết cả phòng, mọi người nhanh chóng chìm vào giấc ngủ sâu an lành.',
      },
      {
        id: 'e_cmh_c2',
        text: 'Bày trò gõ cửa, đập giường dọa các bạn làm cả phòng la hét ầm ĩ',
        attributeEffects: { health: -2, morale: -4, reputation: -10, money: 0 },
        outcomeText: 'Trực ban đại đội dưới tầng 1 nghe tiếng động chạy lên lập biên bản vì làm mất trật tự sau 22h!',
      },
      {
        id: 'e_cmh_c3',
        text: 'Kể một mẩu chuyện hài sinh viên để xua tan bầu không khí rùng rợn rồi chúc cả phòng ngủ ngon',
        attributeEffects: { health: 3, morale: 7, reputation: 6, money: 0 },
        outcomeText: 'Cả phòng cười khúc khích trong chăn rồi yên tâm ngủ say, tinh thần sảng khoái.',
      },
    ],
  },
  {
    id: 'e_viet_nhat_ky_la_thu',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Gia đình & Tâm sự',
    topic: 'journal',
    title: '[TỐI] Viết vài dòng nhật ký gửi người thân dưới ánh đèn hành lang',
    narrative: 'Trước giờ tắt đèn, bạn tranh thủ ngồi bên bàn học ghi lại những cảm xúc bỡ ngỡ và niềm tự hào của những ngày đầu tân binh.',
    speaker: {
      name: 'Minh',
      role: 'Bạn cùng phòng',
      avatarId: 'minh',
      mood: 'smile',
    },
    dialogue: 'Cậu cũng đang viết nhật ký à? Tớ vừa viết thư cho mẹ kể chuyện chiếc chăn gấp vuông vức đấy!',
    backgroundType: 'study',
    choices: [
      {
        id: 'e_vnk_c1',
        text: 'Ghi lại những trải nghiệm đáng nhớ và sự trưởng thành của bản thân sau từng ngày',
        attributeEffects: { health: 1, morale: 7, reputation: 4, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        inventoryRewardId: 'so_tay',
        outcomeText: 'Những trang viết lắng đọng giúp bạn thêm yêu quý cuộc sống quân ngũ và tự hào về bản thân.',
      },
      {
        id: 'e_vnk_c2',
        text: 'Gấp sổ lại, vội vàng lên giường nằm lướt mạng xã hội cho hết giờ',
        attributeEffects: { health: 0, morale: 1, reputation: 0, money: 0 },
        outcomeText: 'Bạn trôi qua buổi tối bình lặng, sẵn sàng cho giấc ngủ trước giờ tắt đèn.',
      },
      {
        id: 'e_vnk_c3',
        text: 'Cùng Minh trao đổi vài câu chuyện thú vị trong ngày rồi cùng tắt đèn bàn đi ngủ',
        attributeEffects: { health: 2, morale: 6, reputation: 5, money: 0 },
        outcomeText: 'Tình bạn cùng phòng thêm gắn kết, tâm trạng nhẹ nhõm sau một ngày rèn luyện vất vả.',
      },
    ],
  },
  {
    id: 'e_mi_tom_dem_khuya',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Ăn uống & Sinh hoạt',
    topic: 'late_snack',
    title: '[TỐI] Cơn đói cồn cào lúc 21h15 và bát mì tôm thơm nức',
    narrative: 'Sau ca trực gác ngoài sảnh lộng gió se lạnh, bụng bạn réo lên ùng ục vì đói. Mấy bạn phòng bên đang rủ nhau úp bát mì tôm.',
    speaker: {
      name: 'Huy',
      role: 'Bạn cùng phòng',
      avatarId: 'huy',
      mood: 'smile',
    },
    dialogue: 'Nước sôi đây rồi! Cậu có muốn úp chung bát mì tôm chua cay cho ấm bụng không?',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_mt_c1',
        text: 'Ăn một lượng vừa phải, dọn dẹp bát đũa và lau sạch mặt bàn ngay sau khi ăn',
        attributeEffects: { health: 4, morale: 6, reputation: 3, money: -10000 },
        tipRewardId: 'tip_khong_de_thuc_an_thu_hut_chuot',
        outcomeText: 'Bát mì nóng ấm bụng xua tan giá rét. Bàn phòng sạch sẽ không để lại mùi thu hút kiến chuột.',
      },
      {
        id: 'e_mt_c2',
        text: 'Ăn xong để cả tô mì nước thừa trên mặt bàn định bụng mai dọn rồi đi ngủ',
        attributeEffects: { health: -1, morale: -3, reputation: -7, money: -10000 },
        outcomeText: 'Đêm chuột chạy làm đổ tô mì ra giáo trình, sáng hôm sau bị trực ban trừ điểm nặng nề!',
      },
      {
        id: 'e_mt_c3',
        text: 'Chỉ xin húp một thìa nước canh cho ấm bụng rồi uống nước ấm đi ngủ tránh nặng bụng',
        attributeEffects: { health: 3, morale: 4, reputation: 5, money: 0 },
        outcomeText: 'Vừa ấm cổ họng vừa nhẹ bụng, sáng hôm sau dậy sớm không bị ậm ạch khó tiêu.',
      },
    ],
  },
  {
    id: 'e_on_thi_ly_thuyet_dem',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Học tập & Kỷ luật',
    topic: 'exam_prep',
    title: '[TỐI] Ôn tập lý luận quân sự trước giờ nộp điện thoại 20:20 và điểm danh 20:30',
    narrative: '19:40 tối, trong khung giờ nhận điện thoại (19:00 - 20:20), nhóm học tập trong phòng mở giáo trình cùng nhau ôn bài trước khi thu máy 20:20 và xuống sân chào cờ điểm danh giao ban 20:30.',
    speaker: {
      name: 'An',
      role: 'Lớp phó học tập',
      avatarId: 'an',
      mood: 'smile',
    },
    dialogue: 'Mỗi người đặt 3 câu hỏi trắc nghiệm rồi đố nhau nhé, cách này nhớ bài siêu nhanh luôn!',
    backgroundType: 'study',
    choices: [
      {
        id: 'e_ot_c1',
        text: 'Tích cực tham gia đố vui trắc nghiệm, giải thích cặn kẽ các điều luật quân sự cho bạn bè',
        attributeEffects: { health: 0, morale: 7, reputation: 8, money: 0 },
        tipRewardId: 'tip_tap_trung_nghe_giang_chieu',
        outcomeText: 'Kiến thức được củng cố vững chắc, cả nhóm đều tự tin sẽ đạt điểm giỏi!',
      },
      {
        id: 'e_ot_c2',
        text: 'Ngồi bấm điện thoại lướt mạng, phó mặc bài vở đến đâu thì đến',
        attributeEffects: { health: 0, morale: -3, reputation: -4, money: 0 },
        outcomeText: 'Kiến thức mơ hồ khiến bạn lo lắng bồn chồn trước kỳ thi.',
      },
      {
        id: 'e_ot_c3',
        text: 'Lập bảng sơ đồ tư duy tóm tắt 5 bài học cốt lõi dán lên góc bàn học chung',
        attributeEffects: { health: 0, morale: 6, reputation: 9, money: 0 },
        outcomeText: 'Cả phòng đều khen ngợi sự đóng góp hữu ích của bạn cho việc học tập chung.',
      },
    ],
  },
  {
    id: 'e_sjc_binh_am_dem',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'sjc_item_event',
    topic: 'sjc_night_warmth',
    title: '[TỐI] Đêm sương lạnh Hòa Lạc & Nước ấm Bình giữ nhiệt SJC',
    narrative: '21:00 đêm đồi Hòa Lạc gió lạnh rít từng cơn sau buổi sinh hoạt đại đội, cổ họng ngứa ngáy và bạn cùng phòng bị ho vì lạnh.',
    speaker: {
      name: 'Huy',
      role: 'Bạn cùng phòng',
      avatarId: 'huy',
      mood: 'worried',
    },
    dialogue: 'Khụ... khụ... Gió đồi luồn qua khe cửa buốt quá, cổ họng tớ rát bỏng ho không dứt được...',
    backgroundType: 'dorm',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'e_sjc_bad_c1',
        text: 'Rót nước ấm từ Bình giữ nhiệt SJC pha một chút mật ong/gừng ấm cho bản thân và mời bạn cùng phòng cùng uống',
        attributeEffects: { health: 6, morale: 8, reputation: 6, money: 0 },
        tipRewardId: 'tip_uong_nuoc_am_chia_nho',
        inventoryRewardId: 'sjc_binh_giu_nhiet',
        outcomeText: 'Hơi ấm ngọt ngào làm dịu êm cổ họng ngay tức khắc, tiếng ho dứt điểm, cả phòng 14 người cảm kích sự chu đáo và ấm áp tình đồng chí của bạn!',
      },
      {
        id: 'e_sjc_bad_c2',
        text: 'Uống thẳng nước lạnh từ chai nhựa để hở trên bàn từ trưa',
        attributeEffects: { health: -6, morale: -3, reputation: 0, money: 0 },
        outcomeText: 'Nước lạnh ngắt làm cổ họng buốt giá, cơn ho kéo dài dai dẳng suốt cả đêm làm bạn mệt mỏi.',
      },
      {
        id: 'e_sjc_bad_c3',
        text: 'Trùm chăn nằm im chịu đựng cơn ho và gió lạnh luồn qua khe cửa sổ',
        attributeEffects: { health: -3, morale: -2, reputation: 0, money: 0 },
        outcomeText: 'Trằn trọc khó ngủ vì lạnh, sáng hôm sau giọng khàn đặc khi hô khẩu lệnh tập thể dục.',
      },
    ],
  },
  // --- TÌNH HUỐNG MÙA HÈ HÒA LẠC MỚI (EXPANSION) ---
  {
    id: 'e_len_an_dem_mi_tom',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Ăn uống & Sinh hoạt',
    topic: 'secret_midnight_noodles',
    title: '[TỐI] Lén nấu mì tôm đêm sau giờ tắt đèn 22h00',
    narrative: '22:30 đêm hè thanh vắng, toàn doanh trại đã tắt đèn đi ngủ. Bụng cồn cào sau ngày dài tập thể lực bãi tập, trong góc phòng có tiếng thì thầm rủ nhau mở bình siêu tốc nấu lén bát mì tôm Hảo Hảo tôm chua cay thơm nức mũi.',
    speaker: {
      name: 'Huy',
      role: 'Cây hài phòng',
      avatarId: 'huy',
      mood: 'smile',
    },
    dialogue: 'Suỵt... Khẽ thôi cậu! Nước sôi rồi, chia nhau bằng nắp cặp lồng nhé, mùi thơm nức thế này sợ thầy đi tuần ngửi thấy mất!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_lad_c1',
        text: 'Chia nhau mỗi người một gắp xì xụp ấm bụng, lau sạch bát đũa và mở he hé cửa sổ cho bay hết mùi',
        attributeEffects: { health: 2, morale: 8, reputation: 5, money: -10000 },
        tipRewardId: 'tip_khong_de_thuc_an_thu_hut_chuot',
        outcomeText: 'Kỷ niệm ăn vụng đêm khuya ấm lòng tình đồng chí! Phòng sạch sẽ không để lại dấu vết nào khi tổ kiểm tra đi qua.',
      },
      {
        id: 'e_lad_c2',
        text: 'Bật đèn pin sáng quắc và vừa ăn vừa cười nói ồn ào đánh thức các phòng xung quanh',
        attributeEffects: { health: -1, morale: -5, reputation: -10, money: -10000 },
        outcomeText: 'Ánh sáng và tiếng ồn lọt qua khe cửa, thầy trực ban ập vào lập biên bản tịch thu bình đun siêu tốc!',
      },
      {
        id: 'e_lad_c3',
        text: 'Lịch sự từ chối ăn khuya để giữ bụng nhẹ nhàng và nhắc nhở các bạn dọn dẹp cẩn thận tránh kiến chuột',
        attributeEffects: { health: 3, morale: 5, reputation: 7, money: 0 },
        tipRewardId: 'tip_tat_den_dung_gio',
        outcomeText: 'Bạn có một giấc ngủ sâu ngon lành, sáng hôm sau bụng dạ khỏe khoắn không lo đầy hơi khó tiêu.',
      },
    ],
  },
  {
    id: 'e_chuyen_ma_phong_toi',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Đời sống chiến sĩ',
    topic: 'ghost_stories_midnight',
    title: '[TỐI] Kể chuyện ma rùng rợn Hòa Lạc đêm khuya bên bậu cửa sổ hành lang',
    narrative: '21:30 tối, chuẩn bị bước vào giờ điểm danh ngủ. Ngoài cửa sổ, rặng thông đồi reo vi vu trong gió lạnh. Cả phòng 14 người quây quần ngồi trên chiếu, thì thầm kể cho nhau nghe những truyền thuyết đô thị ma mị ở đất Hòa Lạc từ các khóa trước truyền lại.',
    speaker: {
      name: 'Nam',
      role: 'Người kể chuyện',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Khóa trước bảo ở bốt gác số 3 lúc nửa đêm thỉnh thoảng có bóng người mặc áo trắng đứng vẫy tay đấy...',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_cmp_c1',
        text: 'Kể thêm một mẩu chuyện ma kết thúc bằng pha hài hước dí dỏm để biến sợ hãi thành tiếng cười giòn tan',
        attributeEffects: { health: 1, morale: 9, reputation: 8, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Cả phòng cười nghiêng ngả đập tan bầu không khí rùng rợn, ai nấy đều yên tâm chui vào chăn ngủ ngon.',
      },
      {
        id: 'e_cmp_c2',
        text: 'Bày trò lấy chăn trắng trùm đầu đập mạnh vào cánh cửa dọa các bạn nữ phòng bên',
        attributeEffects: { health: -2, morale: -6, reputation: -10, money: 0 },
        outcomeText: 'Tiếng la hét thất thanh làm kinh động cả tầng, đại đội phó lên phạt cả phòng đứng chào cờ 20 phút.',
      },
      {
        id: 'e_cmp_c3',
        text: 'Cùng bạn cùng phòng đi kiểm tra đóng chặt các chốt cửa sổ tránh gió lạnh lùa vào phòng',
        attributeEffects: { health: 3, morale: 6, reputation: 7, money: 0 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        outcomeText: 'Cửa nẻo an toàn ấm áp, gió đêm không lùa vào được giúp cả phòng giữ gìn sức khỏe cho ngày mới.',
      },
    ],
  },
  {
    id: 'e_boardgame_giao_luu_phong',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Giao lưu phòng',
    topic: 'boardgame_match_uno',
    title: '[TỐI] Trận đại chiến Boardgame Ma sói & Uno giữa hai phòng đối diện',
    narrative: '19:45 tối, trong giờ sinh hoạt tự do, phòng bạn thách đấu phòng đối diện một trận Ma sói và Uno nảy lửa. Hơn hai mươi sinh viên quây tròn giữa chiếu, những màn biện luận đanh thép và tiếng cười rộ lên mỗi khi có pha "lật kèo" ngoạn mục.',
    speaker: {
      name: 'Mai',
      role: 'Quản trò Ma sói',
      avatarId: 'linh',
      mood: 'laugh',
    },
    dialogue: 'Đêm đã về trên làng Hòa Lạc, mọi người đi ngủ... Sói hãy mở mắt và chọn nạn nhân đêm nay!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_bgp_c1',
        text: 'Trổ tài lập luận sắc bén chuẩn sinh viên Báo chí, dẫn dắt dân làng tìm ra sói và giành chiến thắng giòn giã',
        attributeEffects: { health: 0, morale: 10, reputation: 9, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Tài hùng biện thuyết phục khiến cả hai phòng thán phục, tình bạn giữa hai phòng trở nên khăng khít.',
      },
      {
        id: 'e_bgp_c2',
        text: 'Cay cú khi bị bỏ phiếu loại sớm, to tiếng tranh cãi làm mất hòa khí giữa hai phòng',
        attributeEffects: { health: -1, morale: -5, reputation: -8, money: 0 },
        outcomeText: 'Cuộc chơi mất vui giữa chừng, bạn bị mọi người đánh giá là thiếu tinh thần thể thao giải trí.',
      },
      {
        id: 'e_bgp_c3',
        text: 'Nhắc nhở mọi người canh chừng giờ giấc, chủ động kết thúc ván đấu đúng 20:20 để nộp điện thoại',
        attributeEffects: { health: 1, morale: 7, reputation: 8, money: 0 },
        tipRewardId: 'tip_nop_dien_thoai_2020',
        outcomeText: 'Ý thức kỷ luật chuẩn chỉ giúp cả hai phòng vừa chơi vui trọn vẹn vừa chấp hành đúng quy định trung đội.',
      },
    ],
  },
  {
    id: 'e_goi_dien_ve_gia_dinh',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Tình cảm gia đình',
    topic: 'family_phone_call',
    title: '[TỐI] 30 phút quý giá gọi điện thoại video về cho bố mẹ chia sẻ cuộc sống quân ngũ',
    narrative: '20:00 tối, trong khung giờ được dùng điện thoại (19:00 - 20:20) trước khi nộp vào tủ niêm phong đại đội, bạn ra góc hành lang lộng gió gọi video về cho gia đình. Nhìn thấy mâm cơm mẹ nấu và nụ cười ấm áp của bố qua màn hình, bao mệt nhọc như tan biến.',
    speaker: {
      name: 'Mẹ',
      role: 'Gia đình yêu thương',
      avatarId: 'roommate',
      mood: 'smile',
    },
    dialogue: 'Con ăn cơm quân đội có quen không? Da dẻ có bị sạm nắng nhiều không con? Cố gắng rèn luyện thật tốt nhé con yêu!',
    backgroundType: 'evening_campus',
    choices: [
      {
        id: 'e_gdv_c1',
        text: 'Khoe chiếc chăn vuông vức tự tay gấp, làn da rám nắng khỏe khoắn và kể những câu chuyện vui cùng đồng đội',
        attributeEffects: { health: 2, morale: 12, reputation: 6, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Bố mẹ vô cùng tự hào và an tâm thấy con đã thực sự trưởng thành, tiếp thêm động lực to lớn cho bạn!',
      },
      {
        id: 'e_gdv_c2',
        text: 'Than thở vất vả, chê bai cơm canh quân đội làm mẹ ở nhà lo lắng đứng ngồi không yên',
        attributeEffects: { health: -1, morale: -6, reputation: -2, money: 0 },
        outcomeText: 'Tâm trạng thêm ủ dột, cuộc gọi kết thúc trong nỗi âu lo trĩu nặng của gia đình.',
      },
      {
        id: 'e_gdv_c3',
        text: 'Nhắn nhủ bố mẹ giữ gìn sức khỏe ở nhà, gửi lời chúc bình an rồi tắt nguồn đúng 20:15 chuẩn bị nộp điện thoại 20:20',
        attributeEffects: { health: 1, morale: 9, reputation: 8, money: 0 },
        tipRewardId: 'tip_nop_dien_thoai_2020',
        outcomeText: 'Tình cảm hiếu thảo chan chứa cùng tác phong chuẩn mực giúp bạn ngủ một giấc thật thanh thản.',
      },
    ],
  },
  {
    id: 'e_sinh_hoat_phong_phan_cong',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Nội vụ phòng',
    topic: 'room_meeting_duties',
    title: '[TỐI] Họp phòng 14 người phân công trực nhật và giải quyết bất đồng nội bộ',
    narrative: '20:45 tối, trưởng phòng triệu tập buổi họp ngắn 15 phút. Nội dung trọng tâm: phân công lại lịch cọ rửa nhà vệ sinh, giặt khăn lau sàn nhà và thống nhất quy tắc không bật đèn pin soi vào mặt bạn đang ngủ tầng dưới.',
    speaker: {
      name: 'Trưởng phòng',
      role: 'Đại diện phòng 14 người',
      avatarId: 'an',
      mood: 'normal',
    },
    dialogue: 'Chúng ta sống chung 14 người một phòng, phải có quy ước rõ ràng thì mới giữ được đoàn kết và phòng luôn sạch đẹp!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_shp_c1',
        text: 'Chủ động xung phong nhận phần việc khó (cọ rửa sàn nhà vệ sinh) để làm gương cho cả phòng',
        attributeEffects: { health: -1, morale: 8, reputation: 12, money: 0 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        outcomeText: 'Hành động xông xáo nhận được sự nể phục của cả phòng 14 người, mọi bất đồng nhanh chóng được hóa giải!',
      },
      {
        id: 'e_shp_c2',
        text: 'Đùn đẩy trách nhiệm, cãi cọ phân bua rằng mình đã dọn dẹp nhiều hơn người khác',
        attributeEffects: { health: -2, morale: -6, reputation: -9, money: 0 },
        outcomeText: 'Buổi họp phòng trở nên căng thẳng, mất tình đoàn kết giữa các thành viên cùng sinh hoạt.',
      },
      {
        id: 'e_shp_c3',
        text: 'Đề xuất bảng phân công xoay vòng công bằng theo thứ tự giường nằm và dán lên cửa phòng',
        attributeEffects: { health: 0, morale: 7, reputation: 9, money: 0 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Sáng kiến khoa học minh bạch được 100% thành viên biểu quyết tán thành trong tiếng vỗ tay giòn giã.',
      },
    ],
  },
  {
    id: 'e_dan_guitar_hat_san_co',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Văn nghệ thanh niên',
    topic: 'acoustic_guitar_night',
    title: '[TỐI] Đêm giao lưu đàn guitar hát tình ca dưới bầu trời ngàn sao Hòa Lạc',
    narrative: '20:00 tối gió đồi thổi lồng lộng mát rượi, một nhóm sinh viên mang cây đàn guitar acoustic ra bãi cỏ trước tòa nhà D2 dạo khúc ca tuổi trẻ. Tiếng hát mộc mạc cất lên, hàng chục sinh viên từ các phòng kéo xuống vây quanh hòa giọng.',
    speaker: {
      name: 'Duy',
      role: 'Tay đàn Guitar',
      avatarId: 'huy',
      mood: 'laugh',
    },
    dialogue: 'Đêm nay trăng thanh gió mát tuyệt vời quá! Cả nhà cùng hát bài "Khát vọng tuổi trẻ" nhé!',
    backgroundType: 'evening_campus',
    choices: [
      {
        id: 'e_dgh_c1',
        text: 'Hòa mình vào vòng tròn sinh viên, cất cao tiếng hát say mê dưới vòm trời đêm đầy sao',
        attributeEffects: { health: 1, morale: 12, reputation: 8, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Khoảnh khắc thanh xuân thiêng liêng và xúc động! Những giai điệu tuổi trẻ sẽ mãi in đậm trong ký ức đời sinh viên.',
      },
      {
        id: 'e_dgh_c2',
        text: 'Mải đàn hát quá giờ nộp máy 20:20, làm trễ giờ xuống sân chào cờ tập trung điểm danh 20:30',
        attributeEffects: { health: 0, morale: -3, reputation: -6, money: 0 },
        outcomeText: 'Bị cán bộ trực ban nhắc nhở vì xuống sân tập trung muộn, phải đứng hàng sau nghe quán triệt.',
      },
      {
        id: 'e_dgh_c3',
        text: 'Lặng lẽ ngồi lắng nghe giai điệu ngọt ngào, cảm nhận sự bình yên hiếm có giữa guồng quay huấn luyện',
        attributeEffects: { health: 2, morale: 9, reputation: 5, money: 0 },
        outcomeText: 'Tâm hồn được xoa dịu thư thái, một buổi tối bình yên tiếp thêm sức mạnh cho những ngày thao trường phía trước.',
      },
    ],
  },
  {
    id: 'e_kiem_tra_noi_vu_bat_ngo',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Kỷ luật quân đội',
    topic: 'surprise_inspection_night',
    title: '[TỐI] Cán bộ kiểm tra nội vụ đột xuất lúc 21h45 trước giờ đi ngủ',
    narrative: '21:45, tiếng bước chân giày đinh dõng dạc vang lên ngoài hành lang. Trung đội trưởng cùng kíp trực ban bất ngờ đi kiểm tra nội vụ từng phòng: góc chăn vuông, độ thẳng của hàng dép dưới gầm giường và quần áo phơi trong phòng.',
    speaker: {
      name: 'Thầy Trung đội trưởng',
      role: 'Cán bộ kiểm tra',
      avatarId: 'commander',
      mood: 'stern',
    },
    dialogue: 'Kiểm tra nội vụ đêm! Tất cả đứng tại vị trí đầu giường! Để tôi xem tối nay phòng nào còn để dép quay mũi lộn xộn!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_ktn_c1',
        text: 'Đứng nghiêm trang đầu giường, trước đó đã cẩn thận chỉnh chăn vuông vức và xếp dép thẳng tắp bằng thước kẻ',
        attributeEffects: { health: 1, morale: 8, reputation: 12, money: 0 },
        tipRewardId: 'tip_gap_chan_vuong_goc',
        outcomeText: 'Phòng bạn được thầy chấm điểm Xuất sắc và nêu gương biểu dương toàn đại đội trong buổi chào cờ sáng mai!',
      },
      {
        id: 'e_ktn_c2',
        text: 'Để dép chỏng chơ một chiếc quay ra một chiếc quay vào, chăn màn bùng nhùng như tổ quạ',
        attributeEffects: { health: -2, morale: -7, reputation: -10, money: 0 },
        outcomeText: 'Thầy phê bình gay gắt và yêu cầu cả phòng đứng gấp lại chăn màn đúng 15 phút đến khi vuông vức mới được đi ngủ.',
      },
      {
        id: 'e_ktn_c3',
        text: 'Nhanh tay nhắc nhở bạn giường tầng trên giấu chiếc mũ cối để sai quy định vào hộc tủ cá nhân',
        attributeEffects: { health: 0, morale: 6, reputation: 8, money: 0 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        outcomeText: 'Pha ứng cứu đồng đội kịp thời giúp phòng thoát khỏi một lỗi trừ điểm thi đua trong gang tấc!',
      },
    ],
  },
  {
    id: 'e_viet_nhat_ky_duoi_chan',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Tâm tư tân binh',
    topic: 'diary_under_blanket',
    title: '[TỐI] Trùm chăn soi đèn pin viết những dòng nhật ký quân ngũ ngày cuối',
    narrative: '22:45 đêm hè tĩnh mịch, sau khi toàn phòng đã chìm sâu vào giấc ngủ, tiếng côn trùng rả rích ngoài đồi. Bạn bật ngọn đèn pin nhỏ trùm chăn viết lại những kỷ niệm đáng nhớ vào cuốn sổ tay quân sự SJC, ghi dấu chuyến đi thanh xuân khó quên.',
    speaker: {
      name: 'Nhật ký cá nhân',
      role: 'Ký ức Hola',
      avatarId: 'minh',
      mood: 'smile',
    },
    dialogue: 'Những ngày ở Hòa Lạc nắng gió này đã biến mình từ một cô cậu sinh viên bỡ ngỡ thành một chiến sĩ kiên cường...',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_vnd_c1',
        text: 'Nắn nót ghi lại những bài học trưởng thành, tình bạn đồng đội và lời cảm ơn sâu sắc gửi tới thầy cô',
        attributeEffects: { health: 1, morale: 10, reputation: 7, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        inventoryRewardId: 'so_tay',
        outcomeText: 'Những trang viết chan chứa cảm xúc sẽ trở thành hành trang vô giá theo bạn suốt chặng đường đời phía trước.',
      },
      {
        id: 'e_vnd_c2',
        text: 'Soi đèn pin lơ đãng làm ánh sáng hắt qua cửa sổ bị trực ban đi tuần gõ cửa nhắc nhở tắt đèn',
        attributeEffects: { health: -1, morale: -3, reputation: -4, money: 0 },
        outcomeText: 'Bạn vội vã tắt đèn cất sổ đi ngủ, rút kinh nghiệm giữ nghiêm kỷ luật giờ giới nghiêm.',
      },
      {
        id: 'e_vnd_c3',
        text: 'Gấp sổ lại, nằm ngẫm nghĩ về những bước tiến của bản thân rồi mỉm cười chìm vào giấc ngủ an lành',
        attributeEffects: { health: 3, morale: 9, reputation: 6, money: 0 },
        outcomeText: 'Giấc ngủ êm đềm tràn ngập niềm tin yêu cuộc sống, sẵn sàng đón nhận những thử thách mới.',
      },
    ],
  },
  {
    id: 'e_mua_dong_he_cuon_troi_chau_giat',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Thời tiết dông hè',
    topic: 'summer_storm_drying_rack',
    title: '[TỐI] Cơn mưa dông hè ập đến lúc 20:45 & Cuộc chạy đua thu dọn quần áo ngoài ban công',
    narrative: '20:45 tối (sau giờ điểm danh đại đội 20:30 trở về phòng), mây đen ùn ùn kéo đến kèm theo những tia chớp xé rạch bầu trời Hòa Lạc. Gió lốc giật mạnh thốc thẳng vào ban công phòng, làm rung lắc dữ dội 3 dây thép phơi đồ và có nguy cơ giật bay quần áo vừa giặt phơi chiều nay.',
    speaker: {
      name: 'Huy',
      role: 'Cây hài phòng',
      avatarId: 'huy',
      mood: 'worried',
    },
    dialogue: 'Gió to bão bùng rồi các cậu ơi! Quần áo cả phòng phơi ngoài ban công đang bị gió quăng quật sắp bay mất kìa!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_mdh_c1',
        text: 'Lao ngay ra ban công cùng bạn cùng phòng, nhanh tay tháo móc gom toàn bộ quân phục trên 3 dây phơi đưa vào phòng an toàn',
        attributeEffects: { health: 0, morale: 9, reputation: 11, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Toàn bộ quần áo của 14 người trong phòng được bảo vệ khô ráo nguyên vẹn, cả phòng cảm kích sự xông xáo của bạn!',
      },
      {
        id: 'e_mdh_c2',
        text: 'Mải ngồi trong phòng xem tài liệu mặc kệ tiếng gió rít ngoài ban công, gió thổi bay mất chiếc áo quân phục dã chiến',
        attributeEffects: { health: -1, morale: -7, reputation: -8, money: -50000 },
        outcomeText: 'Gió lốc hất bay chiếc áo ra bãi cỏ xa trong đêm tối, sáng mai bạn phải làm bản kiểm điểm và bồi thường quân trang.',
      },
      {
        id: 'e_mdh_c3',
        text: 'Hô hào cả phòng chia nhau: người tháo móc gom đồ khô vào tủ, người chằng néo đồ ẩm áp sát tường chắn gió và chốt chặt cửa kính ban công',
        attributeEffects: { health: 1, morale: 10, reputation: 10, money: 0 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        outcomeText: 'Kế hoạch tác chiến nhanh gọn giúp giải cứu thành công đồ đạc của phòng trước khi cơn mưa trút xuống!',
      },
    ],
  },
  {
    id: 'e_mua_qua_vat_cang_tin_toi',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Đời sống sinh viên',
    topic: 'evening_canteen_treats',
    title: '[TỐI] Ghé quầy tạp hóa căng-tin mua mì ly, bim bim và nước giải khát',
    narrative: '19:15 tối, trong khung giờ được nhận lại điện thoại (19:00 - 20:20) và trước giờ tập trung điểm danh 20:30. Quầy tạp hóa căng-tin tấp nập sinh viên ghé mua mì ly đóng hộp, xúc xích tiệt trùng ăn liền, bim bim và nước khoáng đóng chai giải khát.',
    speaker: {
      name: 'Linh',
      role: 'Bạn thân',
      avatarId: 'linh',
      mood: 'smile',
    },
    dialogue: 'Ghé mua vài ly mì gói đóng hộp với xúc xích tiệt trùng để tối gác đêm hay học bài đói thì úp nước sôi ăn, sẵn mua thêm gói bánh quy giòn nhé!',
    backgroundType: 'canteen',
    choices: [
      {
        id: 'e_mqv_c1',
        text: 'Mua một gói bánh quy cùng chai nước trà xanh ướp lạnh, ngồi ghế đá hóng mát tâm sự kỷ niệm quân trường',
        attributeEffects: { health: 2, morale: 10, reputation: 8, money: -20000 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Khoảnh khắc thảnh thơi ấm áp giữa lòng Hòa Lạc, nạp đầy năng lượng tinh thần cho những ngày thao trường.',
      },
      {
        id: 'e_mqv_c2',
        text: 'Mải ngồi ăn vặt buôn chuyện quên giờ giấc, sát 20:20 mới cuống cuồng chạy về nộp điện thoại',
        attributeEffects: { health: -1, morale: -4, reputation: -6, money: -20000 },
        outcomeText: 'Vừa chạy thục mạng vừa lo lắng, bạn bị trưởng phòng nhắc nhở vì nộp điện thoại muộn giờ quy định.',
      },
      {
        id: 'e_mqv_c3',
        text: 'Mua thêm vài gói xúc xích tiệt trùng, mì ly và sữa hộp mang về phòng tiếp tế cho các bạn trực gác đêm khuya',
        attributeEffects: { health: 1, morale: 9, reputation: 11, money: -30000 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Món quà tiếp tế đêm khuya bất ngờ làm các đồng chí trực gác rưng rưng cảm động vì tình đồng đội chu đáo!',
      },
    ],
  },
  {
    id: 'e_tap_van_nghe_10_bai_hat_quy_dinh',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Văn hóa quân ngũ',
    topic: 'military_evening_briefing',
    title: '[TỐI] 19h30 Sinh hoạt đại đội: Giao ban phổ biến kế hoạch huấn luyện bắn súng AK',
    narrative: '19:30 tối, toàn đại đội quây quần trước sảnh nhà D2 dự buổi sinh hoạt giao ban đại đội. Thầy đại đội trưởng và chính trị viên biểu dương tinh thần rèn luyện của các trung đội, đồng thời phổ biến chi tiết kế hoạch huấn luyện bắn súng AK và ném lựu đạn bài 1 cho ngày mai.',
    speaker: {
      name: 'Thầy Chính trị viên',
      role: 'Cán bộ quản lý',
      avatarId: 'commander',
      mood: 'smile',
    },
    dialogue: 'Ngày mai thao trường bắn súng và bài ném lựu đạn đòi hỏi kỷ luật sắt và tuyệt đối an toàn. Toàn đại đội phải chú ý nghe phổ biến yếu lĩnh và quy tắc trường bắn!',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'e_tvn_c1',
        text: 'Lắng nghe chăm chú, ghi chép lại các lưu ý an toàn thao trường và yếu lĩnh ngắm bắn vào sổ tay cá nhân',
        attributeEffects: { health: 2, morale: 12, reputation: 10, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Nắm vững quy tắc an toàn giúp bạn hoàn toàn tự tin và vững tâm lý cho ngày bắn thử nghiệm đạn thật sắp tới!',
      },
      {
        id: 'e_tvn_c2',
        text: 'Ngồi hàng sau lơ đễnh, thì thào nói chuyện riêng chờ cho nhanh đến 20:20 để nộp điện thoại',
        attributeEffects: { health: 0, morale: -4, reputation: -6, money: 0 },
        outcomeText: 'Thầy chính trị viên đi ngang qua phát hiện nói chuyện riêng và yêu cầu đứng lên nhắc lại nội dung an toàn trường bắn.',
      },
      {
        id: 'e_tvn_c3',
        text: 'Tự tin đại diện trung đội đứng lên phát biểu quyết tâm thi đua bắn giỏi và chấp hành nghiêm kỷ luật thao trường',
        attributeEffects: { health: 1, morale: 11, reputation: 12, money: 0 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Tác phong tự tin chuẩn sinh viên Báo chí của bạn khiến cả đại đội bùng nổ tràng pháo tay tán thưởng rực rỡ!',
      },
    ],
  },
  {
    id: 'e_tam_su_dem_cung_ban_gac',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Tình đồng đội',
    topic: 'guard_duty_confessions',
    title: '[TỐI] Ca gác đêm 00:00 - 01:00: Những mẩu chuyện tâm sự thanh xuân dưới ánh trăng',
    narrative: '00:00 nửa đêm, toàn bộ doanh trại đã chìm vào giấc ngủ sâu. Bạn cùng người bạn cùng phòng đứng trực ca gác cầu thang và sảnh chính. Ánh trăng hè vằng vặc soi bóng những rặng cây, không gian tĩnh mịch mở ra những câu chuyện chân thành.',
    speaker: {
      name: 'Bạn gác chung',
      role: 'Đồng chí ca gác',
      avatarId: 'roommate',
      mood: 'smile',
    },
    dialogue: 'Yên ắng quá cậu nhỉ... Ở nhà giờ này chắc tớ vẫn đang cắm mặt vào máy tính, lên đây mới thấy bầu trời đêm đẹp thế này.',
    backgroundType: 'evening_campus',
    choices: [
      {
        id: 'e_tsd_c1',
        text: 'Lắng nghe và chia sẻ chân thành về ước mơ làm báo, những trăn trở tương lai và động viên nhau cùng rèn luyện',
        attributeEffects: { health: 0, morale: 10, reputation: 9, money: 0 },
        tipRewardId: 'tip_giu_vung_tinh_than_lac_quan',
        outcomeText: 'Cuộc trò chuyện sâu lắng thắt chặt tình bạn tri kỷ, ca gác 1 tiếng trôi qua nhanh chóng và đầy ý nghĩa!',
      },
      {
        id: 'e_tsd_c2',
        text: 'Ngồi bệt xuống bậc cầu thang gục đầu ngủ gật, phó mặc ca gác cho một mình bạn trực',
        attributeEffects: { health: 1, morale: -5, reputation: -8, money: 0 },
        outcomeText: 'Tổ cán bộ đi kiểm tra gác đêm bắt gặp cảnh ngủ gật, cả hai bị lập biên bản trừ điểm rèn luyện.',
      },
      {
        id: 'e_tsd_c3',
        text: 'Thay phiên nhau tuần tra dọc hành lang và kiểm tra chốt then cửa sổ các phòng để đảm bảo an toàn tuyệt đối',
        attributeEffects: { health: 0, morale: 7, reputation: 11, money: 0 },
        tipRewardId: 'tip_chap_hanh_lenh_truc_ban',
        outcomeText: 'Ca gác mẫu mực hoàn thành xuất sắc, được chỉ huy kíp trực ban khen ngợi ghi vào sổ giao ban sáng!',
      },
    ],
  },
  {
    id: 'e_lau_don_phong_ve_sinh_dem',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'Nội vụ phòng',
    topic: 'cleaning_restroom_night',
    title: '[TỐI] Tổng vệ sinh nhà tắm khép kín phòng 14 người trước giờ kiểm tra nội vụ 21h00',
    narrative: '20:50 tối (sau giờ điểm danh giao ban đại đội 20:30 dưới sân chào cờ trở về phòng), các phòng gấp rút chuẩn bị cho kíp trực ban đi kiểm tra nội vụ lúc 21:00. Khu vực nhà tắm khép kín và bồn rửa tay của phòng có dấu hiệu ứ đọng nước xà phòng trơn trượt sau giờ tắm cao điểm chiều.',
    speaker: {
      name: 'Trưởng phòng',
      role: 'Chỉ huy phòng 14 người',
      avatarId: 'an',
      mood: 'normal',
    },
    dialogue: 'Còn 10 phút nữa là trực ban đi chấm điểm nội vụ phòng ở rồi! Ai nhận phần cọ sàn nhà tắm và lau khô gương kính cùng mình nào?',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'e_ldp_c1',
        text: 'Chủ động cầm bàn chải cọ sạch sàn gạch men, thông thoát sàn và lau gương kính sáng bóng khô ráo',
        attributeEffects: { health: -1, morale: 8, reputation: 12, money: 0 },
        tipRewardId: 'tip_thong_nhat_quy_uoc_phong',
        outcomeText: 'Khu vệ sinh sạch bong kin kít, thơm tho sạch sẽ! Thầy kiểm tra chấm phòng bạn điểm 10 tròn trĩnh!',
      },
      {
        id: 'e_ldp_c2',
        text: 'Đùn đẩy trách nhiệm vì cho rằng mình tắm từ chiều sàn đã khô rồi, không phải việc của mình',
        attributeEffects: { health: 0, morale: -6, reputation: -10, money: 0 },
        outcomeText: 'Cả phòng bị trừ điểm nội vụ chung vì sàn nhà tắm còn đọng nước xà phòng, không khí trong phòng trở nên căng thẳng.',
      },
      {
        id: 'e_ldp_c3',
        text: 'Phân công nhịp nhàng: 2 bạn cọ sàn chà toilet, 2 bạn lau gương bồn rửa và thu gom rác mang xuống chân cầu thang',
        attributeEffects: { health: 1, morale: 9, reputation: 10, money: 0 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Sự phối hợp khoa học giúp công việc hoàn thành trong tích tắc, cả phòng thảnh thơi chuẩn bị tắt đèn ngủ lúc 21:30.',
      },
    ],
  },
];

// ============================================================================
// 3. NGÂN HÀNG 6 TÌNH HUỐNG DÙNG ĐỒ SJC (BẮT BUỘC ÍT NHẤT 3 TÌNH HUỐNG / 7 NGÀY)
// ============================================================================

export const SJC_MANDATORY_SITUATIONS: StoryEvent[] = [
  // Tình huống 1: Nhiều đồ & Túi tote thần kỳ SJC (Buổi Sáng)
  {
    id: 'sjc_situation_1_tote',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'sjc_item_event',
    topic: 'sjc_tote_bag',
    title: '[SÁNG] Nhiều đồ học tập & Túi tote thần kỳ SJC',
    narrative: 'Các buổi đi học, bạn vừa phải mang giáo trình Quốc phòng, sổ tay, bình nước, kem chống nắng, ô. Tay ôm nách tha rất dễ rơi rớt giữa đường.',
    speaker: {
      name: 'Bạn cùng phòng',
      role: 'Đồng đội SJC',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Sách giáo trình dày cộp lại thêm bình nước với ô, tay ôm lỉnh kỉnh thế này leo dốc đồi kiểu gì cũng rơi mất thôi!',
    backgroundType: 'dorm',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'sjc_s1_c1',
        text: 'Nhét tất cả giáo trình, sổ tay và đồ cá nhân gọn gàng vào chiếc Túi tote thần kỳ SJC rồi khoác lên vai',
        attributeEffects: { reputation: 6, morale: 5, health: 2 },
        inventoryRewardId: 'sjc_tui_tote',
        isSjcChoice: true,
        sjcItemName: 'Túi tote thần kỳ SJC',
        sjcItemIcon: '👜',
        outcomeText: 'Chiếc túi tote thần kỳ SJC chịu lực tốt, sức chứa rộng rãi giúp bạn di chuyển thanh thoát, tác phong nhanh gọn mẫu mực!',
      },
      {
        id: 'sjc_s1_c2',
        text: 'Tay ôm chồng sổ sách lỉnh kỉnh vội vã chạy theo đoàn, bị trượt tay rơi đồ và đi chậm so với đại đội',
        attributeEffects: { morale: -4, health: -2, reputation: -3 },
        outcomeText: 'Chồng giáo trình tuột tay rơi tung tóe ra nền đất đỏ, bạn phải dừng lại nhặt và bị trễ hàng ngũ xuất phát.',
      },
      {
        id: 'sjc_s1_c3',
        text: 'Nhét tạm vài cuốn sách vào lưng quần quân phục và nhờ bạn cùng phòng cầm hộ bình nước, vừa đi vừa lo rơi',
        attributeEffects: { morale: -2, reputation: -1, health: 0 },
        outcomeText: 'Cách chữa cháy tạm thời khiến bạn bước đi ngượng ngùng, vừa đi vừa sợ rơi sách xuống đường dốc.',
      },
    ],
  },

  // Tình huống 2: Nắng rát thao trường & Xịt chống nắng SJC (Buổi Chiều)
  {
    id: 'sjc_situation_2_sunscreen',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'sjc_item_event',
    topic: 'sjc_sunscreen',
    title: '[CHIỀU] Nắng rát thao trường & Xịt chống nắng SJC',
    narrative: '13:45 chiều, trung đội tập trung ra bãi tập ngoài trời. Nắng rát như đổ lửa, bạn cùng phòng nhăn nhó lo bị rát da, cháy nắng.',
    speaker: {
      name: 'Bạn học',
      role: 'Đồng đội thao trường',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Nắng đồi chiều nay gắt quá! Mới đứng 10 phút mà hai cánh tay với gáy rát bỏng cả lên rồi...',
    backgroundType: 'outdoor',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'sjc_s2_c1',
        text: 'Lấy chai Xịt chống nắng SJC (SPF 50) xịt đều lên mặt, cổ, hai cánh tay và chia sẻ cho các bạn xung quanh',
        attributeEffects: { health: 5, morale: 8, reputation: 6 },
        inventoryRewardId: 'sjc_xit_chong_nang',
        isSjcChoice: true,
        sjcItemName: 'Xịt chống nắng SJC (SPF 50)',
        sjcItemIcon: '🧴',
        outcomeText: 'Lớp sương chống nắng bảo vệ da dịu mát tức thì, sự hào phóng chia sẻ giúp bạn ghi điểm tuyệt đối trong lòng đồng đội!',
      },
      {
        id: 'sjc_s2_c2',
        text: 'Chủ quan phơi mặt trần dưới nắng suốt 3 tiếng rèn luyện ngoài bãi đất đỏ',
        attributeEffects: { health: -12, morale: -6 },
        outcomeText: 'Làn da bị cháy nắng đỏ rực và bỏng rát, tối về phòng bạn bị sốt nhẹ vì say nắng cả buổi chiều.',
      },
      {
        id: 'sjc_s2_c3',
        text: 'Lấy mũ cối che mặt né nắng nhưng bị tiểu đội trưởng đi qua nhắc nhở chỉnh đốn tác phong',
        attributeEffects: { reputation: -5, morale: -3, health: -2 },
        outcomeText: 'Hành động né nắng lộ liễu làm sai điều lệnh đứng nghiêm, bạn bị nhắc nhở nghiêm khắc trước hàng quân.',
      },
    ],
  },

  // Tình huống 3: Nắng đồi Hòa Lạc & Bình giữ nhiệt SJC (Buổi Sáng)
  {
    id: 'sjc_situation_3_thermos',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'sjc_item_event',
    topic: 'sjc_thermos_morning',
    title: '[SÁNG] Nắng đồi Hòa Lạc & Bình giữ nhiệt SJC',
    narrative: '10:00 sáng, nắng đồi Hòa Lạc bắt đầu gay gắt. Bài tập điều lệnh kéo dài khiến cơ thể mất nước nhanh chóng, cổ họng khô rát.',
    speaker: {
      name: 'Bạn cùng phòng',
      role: 'Đồng đội thao trường',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Khát cháy cổ họng rồi! Vừa chạy vừa hô khẩu lệnh mệt lả cả người...',
    backgroundType: 'outdoor',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'sjc_s3_c1',
        text: 'Rút chiếc Bình giữ nhiệt SJC đã pha sẵn nước mát từ sáng ra nhấp từng ngụm nhỏ sảng khoái',
        attributeEffects: { health: 8, morale: 6, reputation: 4 },
        inventoryRewardId: 'sjc_binh_giu_nhiet',
        isSjcChoice: true,
        sjcItemName: 'Bình giữ nhiệt SJC',
        sjcItemIcon: '🥤',
        outcomeText: 'Nước mát lạnh giữ nhiệt hoàn hảo giúp hạ nhiệt cơ thể an toàn, tinh thần sảng khoái lấy lại phong độ xuất sắc!',
      },
      {
        id: 'sjc_s3_c2',
        text: 'Không mang theo nước, cố bấm bụng chịu khát đến khi hết tiết học',
        attributeEffects: { health: -10, morale: -5 },
        outcomeText: 'Mất nước trầm trọng khiến bạn hoa mắt chóng mặt, cuối buổi tập phải nhờ đồng đội dìu về phòng.',
      },
      {
        id: 'sjc_s3_c3',
        text: 'Chạy vội sang mượn bình nước của bạn bên cạnh nhưng bình của bạn cũng đã cạn đáy',
        attributeEffects: { health: -4, morale: -2, reputation: -1 },
        outcomeText: 'Cả hai cùng ngậm ngùi chịu khát, bài học nhớ đời về việc tự giác chuẩn bị nước trước khi ra thao trường.',
      },
    ],
  },

  // Tình huống 4: Kiểm tra nội vụ bất ngờ & Túi tote thần kỳ SJC (Buổi Sáng)
  {
    id: 'sjc_situation_4_inspection_tote',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'sjc_item_event',
    topic: 'sjc_tote_inspection',
    title: '[SÁNG] Kiểm tra nội vụ bất ngờ & Túi tote thần kỳ SJC',
    narrative: '07:00 sáng, tiểu đội nhận thông báo chuẩn bị kiểm tra nội vụ đột xuất trước giờ lên lớp. Nhiều sách vở, đồ dùng cá nhân trên phản giường chưa kịp cất giấu theo quy chuẩn.',
    speaker: {
      name: 'Trực ban phòng',
      role: 'Cán bộ kiểm tra',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Các bạn ơi nhanh tay lên! Trực ban chuẩn bị gõ cửa chấm điểm rồi, trên giường không được để đồ linh tinh đâu!',
    backgroundType: 'dorm',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'sjc_s4_c1',
        text: 'Gom nhanh toàn bộ sổ sách, tài liệu, đồ lặt vặt vào Túi tote thần kỳ SJC rồi khoác vai mang đi học luôn, giường ngủ sạch tinh tươm',
        attributeEffects: { reputation: 8, morale: 6, health: 2 },
        inventoryRewardId: 'sjc_tui_tote',
        isSjcChoice: true,
        sjcItemName: 'Túi tote thần kỳ SJC',
        sjcItemIcon: '👜',
        outcomeText: 'Phản giường trống trơn đúng quy chuẩn chỉ có chăn gối, trực ban chấm phòng đạt điểm A tối đa!',
      },
      {
        id: 'sjc_s4_c2',
        text: 'Cuống cuồng nhét vội đống tài liệu xuống gầm giường bừa bãi, bị trực ban phát hiện và nhắc nhở',
        attributeEffects: { reputation: -6, morale: -4, health: 0 },
        outcomeText: 'Trực ban cúi xuống soi gầm giường và ghi lỗi đồ đạc lộn xộn vào biên bản chấm thi đua.',
      },
      {
        id: 'sjc_s4_c3',
        text: 'Cố nhét toàn bộ sách vở dày cộp vào góc balô căng phồng làm rơi tung tóe ra sàn nhà',
        attributeEffects: { reputation: -3, morale: -3, health: -1 },
        outcomeText: 'Sách rơi làm bẩn bìa, bạn vừa mất công nhặt vừa bị phê bình vì động tác lúng túng mất bình tĩnh.',
      },
    ],
  },

  // Tình huống 5: Giờ tự học buổi tối & Bình giữ nhiệt SJC (Buổi Tối)
  {
    id: 'sjc_situation_5_study_thermos',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'sjc_item_event',
    topic: 'sjc_thermos_evening',
    title: '[TỐI] Giờ tự học buổi tối & Bình giữ nhiệt SJC',
    narrative: '19:30 tối, không khí tự học mùa hè oi bức dù 2 chiếc quạt trần quay hết công suất. Cơn buồn ngủ và mệt mỏi sau ngày dài lăn lộn dưới nắng gắt thao trường bắt đầu ập đến trong khi giáo trình quân sự còn nhiều bài ôn tập.',
    speaker: {
      name: 'Bạn học',
      role: 'Bạn tự học',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Trời oi bức quá, mồ hôi đầm đìa mà mắt cứ díp lại, giáo trình còn tận 2 chương chưa đọc xong...',
    backgroundType: 'study',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'sjc_s5_c1',
        text: 'Mở Bình giữ nhiệt SJC đựng nước trà hoa cúc ướp đá mát lạnh sảng khoái mang từ sáng, nhâm nhi từng ngụm mát rượi, đập tan cơn buồn ngủ và tỉnh táo ôn bài cùng cả phòng',
        attributeEffects: { morale: 8, reputation: 5, health: 4 },
        inventoryRewardId: 'sjc_binh_giu_nhiet',
        isSjcChoice: true,
        sjcItemName: 'Bình giữ nhiệt SJC',
        sjcItemIcon: '🥤',
        outcomeText: 'Dòng nước mát lạnh thanh nhiệt xua tan cơn khát và oi ả mùa hè, đầu óc bừng tỉnh giúp bạn và cả phòng hoàn thành trọn vẹn bài học!',
      },
      {
        id: 'sjc_s5_c2',
        text: 'Cố gục đầu xuống bàn chịu cơn nóng nực và ngủ gật giữa chừng, không kịp hoàn thành nội dung tự học',
        attributeEffects: { morale: -6, reputation: -4, health: -3 },
        outcomeText: 'Cơn oi bức làm bạn ngầy ngật ngủ gật, bị cán bộ trực ban đi qua nhắc nhở vì vi phạm tác phong giờ tự học.',
      },
      {
        id: 'sjc_s5_c3',
        text: 'Đi ra ngoài hành lang tìm nước mát nhưng bình nước lọc 19L ở sảnh đã hết sạch từ chiều',
        attributeEffects: { morale: -3, reputation: -1, health: -2 },
        outcomeText: 'Bình 19L hết nước, bạn đành uống tạm nước ấm rồi quay vào bàn tự học trong mệt mỏi.',
      },
    ],
  },

  // Tình huống 6: Chuẩn bị đêm văn nghệ & Khăn lạnh SJC (Buổi Tối)
  {
    id: 'sjc_situation_6_gala_towel',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'sjc_item_event',
    topic: 'sjc_towel_gala',
    title: '[TỐI] Chuẩn bị đêm văn nghệ & Khăn lạnh SJC',
    narrative: '20:00 tối, chuẩn bị bước vào buổi tổng duyệt văn nghệ đại đội. Sau buổi chạy thể lực chiều, mồ hôi nhễ nhại và cái nóng bức oi ả khiến các bạn trong đội văn nghệ uể oải, mất tập trung.',
    speaker: {
      name: 'Đội trưởng văn nghệ',
      role: 'Đồng đội SJC',
      avatarId: 'linh',
      mood: 'worried',
    },
    dialogue: 'Mọi người thở dốc mồ hôi ướt sũng áo thế này, tí nữa lên sân khấu khớp nhạc sợ hụt hơi mất...',
    backgroundType: 'courtyard',
    isSjc: true,
    sjcBadge: '[ĐẶC QUYỀN SJC]',
    choices: [
      {
        id: 'sjc_s6_c1',
        text: 'Lấy Khăn lạnh SJC ướp mát chia cho đồng đội lau mặt hạ nhiệt tức thì, xua tan mệt mỏi và lấy lại năng lượng bùng nổ cho tiết mục',
        attributeEffects: { morale: 10, reputation: 8, health: 4 },
        inventoryRewardId: 'sjc_khan_lanh',
        isSjcChoice: true,
        sjcItemName: 'Khăn lạnh SJC',
        sjcItemIcon: '🧊',
        outcomeText: 'Cảm giác the mát sảng khoái lan tỏa khắp cơ thể, cả đội văn nghệ bừng sáng khí thế, tiết mục tập dượt thành công rực rỡ!',
      },
      {
        id: 'sjc_s6_c2',
        text: 'Dùng vạt áo lau vội mồ hôi, bước vào tập dượt trong trạng thái mệt mỏi, hát sai nhịp và bị nhắc nhở',
        attributeEffects: { morale: -5, reputation: -3, health: -2 },
        outcomeText: 'Giọng hát lạc điệu và vũ đạo rời rạc khiến biên đạo phải cho dừng lại chấn chỉnh tác phong.',
      },
      {
        id: 'sjc_s6_c3',
        text: 'Chạy vào nhà vệ sinh tát nước lã lên mặt làm ướt sũng cổ áo quân phục dã chiến',
        attributeEffects: { morale: -2, reputation: -1, health: -3 },
        outcomeText: 'Nước lã dính nhớp vào cổ áo gây ngứa ngáy khó chịu suốt cả buổi tổng duyệt.',
      },
    ],
  },
];

// Helper: Fisher-Yates shuffle
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ============================================================================
// 4. THUẬT TOÁN SINH TÌNH HUỐNG HÀNG NGÀY (DAY GENERATOR)
// ============================================================================

// Nhóm tình huống nghiệp vụ quân sự bắt buộc (Military Duty Situations)
export const MILITARY_DUTY_SITUATIONS: StoryEvent[] = [
  // 1. Trực ban tiểu đội (Sáng)
  {
    id: 'truc_ban_tieu_doi',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'military_duty',
    topic: 'duty_team',
    title: 'Kíp trực ban tiểu đội & Báo cháo bạn ốm',
    narrative: 'Bạn trong kíp trực ban (từ 16h30 hôm trước đến 16h30 hôm nay), sáng ra vừa phải quét hành lang vừa phải đi các phòng gom danh sách báo cháo cho bạn ốm trước giờ ăn.',
    speaker: {
      name: 'Tiểu đội trưởng',
      role: 'Trưởng kíp trực ban',
      avatarId: 'commander',
      mood: 'normal',
    },
    dialogue: 'Sắp đến giờ nhà ăn phát cháo rồi! Phải gom danh sách bạn ốm xuống xin giấy trạm y tế gấp nhé!',
    backgroundType: 'dorm',
    choices: [
      {
        id: 'tbt_c1',
        text: 'Dậy sớm trước báo thức 10 phút, phân công 1 bạn quét hành lang, bạn còn lại cùng mình cầm sổ đi từng phòng xác nhận danh sách rồi xuống y tế xin giấy',
        attributeEffects: { reputation: 12, morale: 6, health: -4 },
        tipRewardId: 'tip_chap_hanh_lenh_truc_ban',
        outcomeText: 'Tác phong chỉn chu khoa học giúp các bạn ốm được nhận cháo nóng đúng giờ, hành lang sạch bóng được chỉ huy khen ngợi!',
      },
      {
        id: 'tbt_c2',
        text: 'Quét vội hành lang rồi quên bẵng việc báo cháo, sát giờ ăn mới cuống cuồng chạy xuống bếp',
        attributeEffects: { reputation: -10, morale: -6 },
        outcomeText: 'Nhà bếp hết suất cháo dự phòng vì báo muộn, bạn phải xin lỗi các bạn ốm trong sự áy náy khôn nguôi.',
      },
      {
        id: 'tbt_c3',
        text: 'Đùn đẩy việc ghi sổ báo cháo cho tiểu đội trưởng để mình chỉ làm việc nhẹ là mở rèm nhà ăn',
        attributeEffects: { reputation: -6, morale: -2, health: 2 },
        outcomeText: 'Thái độ trốn tránh việc khó làm đồng đội trực ban khó chịu, làm giảm sút uy tín cá nhân.',
      },
    ],
  },
  // 2. Vệ sinh khu vực đại đội (Sáng)
  {
    id: 've_sinh_khu_vuc_dai_doi',
    phase: 'morning',
    phaseLabel: 'Sáng',
    category: 'military_duty',
    topic: 'area_cleaning',
    title: 'Vệ sinh khu vực đại đội sân trước D2 (Miễn chạy dài)',
    narrative: '05:30 sáng theo tiếng còi toàn khung D2, tổ của bạn được phân công làm vệ sinh khu vực sân trước khung nhà D2 cùng đại đội (được miễn chạy dài thể dục buổi sáng). Nhà kho rất thiếu hót rác nên phải chủ động chuẩn bị.',
    speaker: {
      name: 'Bạn cùng phòng',
      role: 'Tổ trực khu vực',
      avatarId: 'roommate',
      mood: 'normal',
    },
    dialogue: 'Hôm nay được miễn chạy dài 1500m sướng thật, nhưng nghe nói kho hết sạch hót rác rồi đấy!',
    backgroundType: 'courtyard',
    choices: [
      {
        id: 'vskv_c1',
        text: 'Nhớ lời dặn, chủ động cầm sẵn hót rác của phòng mình và xin thêm túi rác ở phòng giặt mang xuống hiện trường cùng chổi',
        attributeEffects: { reputation: 8, morale: 5, health: 2 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Sự chu đáo giúp tổ của bạn thu dọn sạch sẽ lá rụng trong nháy mắt, vừa thảnh thơi vừa được miễn chạy dài!',
      },
      {
        id: 'vskv_c2',
        text: 'Chỉ cầm tay không xuống nhà kho lấy chổi, đến nơi hết sạch hót rác đành phải dùng bìa carton vun lá cây mất thời gian',
        attributeEffects: { reputation: -4, morale: -4 },
        outcomeText: 'Bìa carton rách nát làm lá bay tứ tung, quét mãi không xong khiến bạn trễ cả giờ ăn sáng.',
      },
      {
        id: 'vskv_c3',
        text: 'Tranh thủ quét qua loa vài đường rồi lẩn vào góc căng-tin ngồi nghỉ chờ các bạn làm xong',
        attributeEffects: { reputation: -8, morale: -2, health: 4 },
        outcomeText: 'Hành vi trốn việc bị cán bộ kiểm tra bắt gặp, cả tổ bị phê bình và phạt trực nhật bù thêm 2 buổi chiều!',
      },
    ],
  },
  // 3. Trực ban nhà ăn đại đội (Chiều)
  {
    id: 'truc_ban_nha_an_chieu',
    phase: 'afternoon',
    phaseLabel: 'Chiều',
    category: 'military_duty',
    topic: 'mess_hall_duty',
    title: 'Trực ban nhà ăn đại đội & Chuẩn bị mâm cơm 6 người',
    narrative: '16:30 chiều, tiểu đội bạn được phân công làm nhiệm vụ trực nhật nhà ăn đại đội: lau khô bàn ăn inox, xếp chuẩn 6 bát - 6 đôi đũa cho từng mâm và bưng cơm canh nóng sốt chia đều trước khi đại đội hành quân vào ăn.',
    speaker: {
      name: 'Tiểu đội trưởng',
      role: 'Trưởng kíp trực ban',
      avatarId: 'commander',
      mood: 'normal',
    },
    dialogue: 'Mâm nào cũng phải đủ 6 bát, đũa phải dùng khăn sạch lau khô ráo, chia đều thức ăn để đồng đội đi tập về là có cơm nóng ăn ngay nhé!',
    backgroundType: 'canteen',
    choices: [
      {
        id: 'tbna_c1',
        text: 'Tỉ mỉ lau khô từng đôi đũa, xếp bàn ăn ngay ngắn và chia đều từng phần thức ăn nóng sốt',
        attributeEffects: { reputation: 8, morale: 5, health: -2 },
        tipRewardId: 'tip_ky_luat_tu_giac_tap_the',
        outcomeText: 'Mâm cơm tươm tất chuẩn bị chu đáo khiến cả đại đội tấm tắc khen ngợi, kíp trực ban được thầy quản lý nhà ăn biểu dương!',
      },
      {
        id: 'tbna_c2',
        text: 'Chia thức ăn qua loa, để đũa còn ướt và bát đĩa lộn xộn khiến các bạn vào ăn phải tự đi đổi đũa',
        attributeEffects: { reputation: -6, morale: -4 },
        outcomeText: 'Đồng đội phàn nàn vì đũa ướt dính, tiểu đội bị nhắc nhở phải ở lại dọn dẹp vệ sinh nhà ăn sau bữa cơm.',
      },
      {
        id: 'tbna_c3',
        text: 'Nhanh nhẹn phụ các cô cấp dưỡng bê nồi canh lớn và bưng khay cơm phụ các dãy bàn bên cạnh',
        attributeEffects: { reputation: 6, morale: 8, health: 1 },
        tipRewardId: 'tip_giup_do_ban_cung_phong',
        outcomeText: 'Sự nhiệt tình xông xáo giúp công việc xong sớm, các cô cấp dưỡng quý mến thưởng thêm cho tiểu đội đĩa dưa hấu mát lạnh!',
      },
    ],
  },
  // 4. Gác đêm / Gác cổng (Tối)
  {
    id: 'night_guard_duty',
    phase: 'evening',
    phaseLabel: 'Tối',
    category: 'military_duty',
    topic: 'night_guard',
    title: 'Ca gác đêm 01:00 sáng & Duy trì an ninh doanh trại',
    narrative: 'Đến ca trực lúc 01:00 sáng (gác cầu thang trong nhà đối với Nữ / gác cổng doanh trại đối với Nam), không gian đêm hè yên ắng và cơn buồn ngủ ập đến dồn dập cùng bạn gác chung.',
    speaker: {
      name: 'Bạn gác chung',
      role: 'Đồng đội trực gác',
      avatarId: 'roommate',
      mood: 'worried',
    },
    dialogue: 'Mắt cứ díp lại bạn ơi! Đêm hè yên tĩnh thế này rất dễ ngủ gật, chúng mình phải cố bấm tay đi lại giữ tỉnh táo nhé!',
    backgroundType: 'evening_campus',
    choices: [
      {
        id: 'ngd_c1',
        text: 'Đứng đúng vị trí, trang phục chỉnh tề, bấm ngón tay đi lại tuần tra giữ tỉnh táo cùng bạn gác chung',
        attributeEffects: { reputation: 10, morale: 4, health: -3 },
        tipRewardId: 'tip_chap_hanh_lenh_truc_ban',
        outcomeText: 'Ý chí kiên định và tác phong nghiêm túc giúp ca gác hoàn thành xuất sắc, được chỉ huy đi tuần kiểm tra biểu dương!',
      },
      {
        id: 'ngd_c2',
        text: 'Ngồi thụp vào góc khuất lấy điện thoại ra lướt mạng chống buồn ngủ',
        attributeEffects: { reputation: -12, morale: -4, health: -2 },
        outcomeText: 'Cán bộ đi kiểm tra đột xuất phát hiện ánh sáng màn hình điện thoại trong bóng tối, lập biên bản trừ điểm thi đua!',
      },
      {
        id: 'ngd_c3',
        text: 'Rủ bạn trực cùng thay phiên nhau: một người chợp mắt 20 phút rồi đổi lượt',
        attributeEffects: { reputation: -8, health: 2, morale: -2 },
        outcomeText: 'Cả hai đều ngủ quên và giật mình tỉnh dậy khi trời gần sáng, may mắn không có sự cố nhưng canh cánh nỗi lo bị phát hiện.',
      },
    ],
  },
];

export interface GenerateDaySituationsOptions {
  hasTriggeredMilitaryDuty?: boolean;
  onMilitaryDutyTriggered?: (eventId: string) => void;
  sjcSituationsTriggeredCount?: number;
  onSjcTriggered?: (eventId: string) => void;
}

// Tách biệt rõ 3 pool theo yêu cầu kỹ thuật:
export const morningPool = MORNING_SITUATIONS;
export const afternoonPool = AFTERNOON_SITUATIONS;
export const eveningPool = EVENING_SITUATIONS;

export function generateDaySituations(
  day: number,
  seenEventIds: Set<string> = new Set(),
  options?: GenerateDaySituationsOptions
): StoryEvent[] {
  // SPECIAL: DAY 1 FLOW
  // Day 1 has strict fixed sequence:
  // 1. d1_fixed_morning (Xuất phát ĐH Nhân Văn & Nhận quân trang)
  // 2. d1_fixed_bed_choice (Phân chia giường ngủ phòng 14 người - Chỉ duy nhất Ngày 1)
  // 3. Buổi tối Ngày 1: Họp phòng sinh hoạt & Phân công trực nhật
  if (day === 1) {
    const d1Events: StoryEvent[] = [];
    if (FIXED_SCHEDULE_EVENTS['d1_fixed_morning']) {
      const ev = FIXED_SCHEDULE_EVENTS['d1_fixed_morning'];
      seenEventIds.add(ev.id);
      d1Events.push({ ...ev, day: 1 });
    }
    if (FIXED_SCHEDULE_EVENTS['d1_fixed_bed_choice']) {
      const ev = FIXED_SCHEDULE_EVENTS['d1_fixed_bed_choice'];
      seenEventIds.add(ev.id);
      d1Events.push({ ...ev, day: 1 });
    }

    // Day 1 Evening: Sinh hoạt phòng Ngày 1
    const d1Evening =
      eveningPool.find((s) => s.id === 'e_sinh_hoat_phong_phan_cong') ||
      eveningPool.find((s) => !seenEventIds.has(s.id)) ||
      createFixedEveningRollcall(1);

    seenEventIds.add(d1Evening.id);
    d1Events.push({
      ...d1Evening,
      day: 1,
      phase: 'evening',
      phaseLabel: 'Tối',
      title: d1Evening.title.startsWith('[TỐI]') ? d1Evening.title : `[TỐI] ${d1Evening.title}`,
    });

    return d1Events;
  }

  // DAYS 2 TO 7 GENERATION:
  // Mỗi ngày gồm đúng 3 buổi: Sáng (Morning), Chiều (Afternoon), Tối (Evening)
  let morningCount = 1;
  let afternoonCount = 1;
  let eveningCount = 1;

  const selectedEvents: StoryEvent[] = [];
  const usedTopicsToday = new Set<string>();

  // 1. MILITARY DUTY ENFORCEMENT LOGIC
  // Nếu đến Ngày 5 mà chưa từng kích hoạt Military Duty -> Bắt buộc kích hoạt 1 tình huống nhiệm vụ quân sự
  const hasMilitaryDutyTriggered = options?.hasTriggeredMilitaryDuty ?? false;
  const isMilitaryDutyForceCheckpoint = day === 5 && !hasMilitaryDutyTriggered;

  if (isMilitaryDutyForceCheckpoint) {
    const availableDuty = MILITARY_DUTY_SITUATIONS.filter((ev) => !seenEventIds.has(ev.id));

    if (availableDuty.length > 0) {
      const pickedDuty = shuffleArray(availableDuty)[0];
      seenEventIds.add(pickedDuty.id);
      usedTopicsToday.add(pickedDuty.topic || pickedDuty.category);

      selectedEvents.push({
        ...pickedDuty,
        day,
        title: pickedDuty.title.startsWith(`[${pickedDuty.phaseLabel.toUpperCase()}]`)
          ? pickedDuty.title
          : `[${pickedDuty.phaseLabel.toUpperCase()}] ${pickedDuty.title}`,
      });

      if (pickedDuty.phase === 'morning') morningCount = Math.max(0, morningCount - 1);
      else if (pickedDuty.phase === 'afternoon') afternoonCount = Math.max(0, afternoonCount - 1);
      else if (pickedDuty.phase === 'evening') eveningCount = Math.max(0, eveningCount - 1);

      if (options?.onMilitaryDutyTriggered) {
        options.onMilitaryDutyTriggered(pickedDuty.id);
      }
    }
  }

  // 2. SJC ENFORCEMENT & DISTRIBUTION LOGIC
  const currentSjcCount = options?.sjcSituationsTriggeredCount ?? 0;
  const isSjcForceCheckpoint =
    (day === 5 && currentSjcCount < 1) ||
    (day === 6 && currentSjcCount < 2) ||
    (day === 7 && currentSjcCount < 3);

  const shouldTrySjc =
    isSjcForceCheckpoint ||
    (day >= 2 && day <= 6 && currentSjcCount < 3 && Math.random() < 0.7);

  let sjcEventToInsert: StoryEvent | null = null;
  if (shouldTrySjc) {
    const availableSjc = SJC_MANDATORY_SITUATIONS.filter((ev) => !seenEventIds.has(ev.id));
    if (availableSjc.length > 0) {
      sjcEventToInsert = shuffleArray(availableSjc)[0];
      seenEventIds.add(sjcEventToInsert.id);
      usedTopicsToday.add(sjcEventToInsert.topic || sjcEventToInsert.category);
      if (options?.onSjcTriggered) {
        options.onSjcTriggered(sjcEventToInsert.id);
      }
    }
  }

  // Helper to pick exactly 1 unseen situation from a designated pool (100% no duplicates)
  const pickFromDesignatedPool = (
    pool: StoryEvent[],
    phase: 'morning' | 'afternoon' | 'evening',
    phaseLabel: string,
    phaseTag: string
  ): StoryEvent | null => {
    // Lọc triệt để các tình huống đã từng xuất hiện trong toàn bộ chiến dịch
    const unseen = pool.filter((ev) => !seenEventIds.has(ev.id));
    const topicFiltered = unseen.filter((ev) => !usedTopicsToday.has(ev.topic || ev.category));
    const poolToDraw = topicFiltered.length > 0 ? topicFiltered : unseen;

    if (poolToDraw.length > 0) {
      const shuffled = shuffleArray(poolToDraw);
      const chosen = shuffled[0];

      // Xóa vĩnh viễn khỏi các lượt bốc thăm tiếp theo bằng cách thêm vào seenEventIds
      seenEventIds.add(chosen.id);
      usedTopicsToday.add(chosen.topic || chosen.category);

      return {
        ...chosen,
        day,
        phase,
        phaseLabel,
        title: chosen.title.startsWith(`[${phaseTag}]`) ? chosen.title : `[${phaseTag}] ${chosen.title}`,
      };
    }

    // Trường hợp dự phòng nếu lọc theo topic làm rỗng danh sách: lấy từ bất kỳ tình huống unseen trong pool
    if (unseen.length > 0) {
      const chosen = shuffleArray<StoryEvent>(unseen)[0];
      seenEventIds.add(chosen.id);
      usedTopicsToday.add(chosen.topic || chosen.category);

      return {
        ...chosen,
        day,
        phase,
        phaseLabel,
        title: chosen.title.startsWith(`[${phaseTag}]`) ? chosen.title : `[${phaseTag}] ${chosen.title}`,
      };
    }

    return null;
  };

  // 1. BUỔI SÁNG (MORNING)
  if (sjcEventToInsert && sjcEventToInsert.phase === 'morning' && morningCount > 0) {
    selectedEvents.push({
      ...sjcEventToInsert,
      day,
      title: sjcEventToInsert.title.startsWith('[SÁNG]') ? sjcEventToInsert.title : `[SÁNG] ${sjcEventToInsert.title}`,
    });
    morningCount--;
  } else if (
    day === 2 &&
    FIXED_SCHEDULE_EVENTS['d2_fixed_morning'] &&
    !seenEventIds.has(FIXED_SCHEDULE_EVENTS['d2_fixed_morning'].id) &&
    morningCount > 0
  ) {
    const fixed = FIXED_SCHEDULE_EVENTS['d2_fixed_morning'];
    seenEventIds.add(fixed.id);
    usedTopicsToday.add(fixed.topic || fixed.category);
    selectedEvents.push({ ...fixed, day });
    morningCount--;
  } else if (
    day === 7 &&
    FIXED_SCHEDULE_EVENTS['d7_fixed_morning'] &&
    !seenEventIds.has(FIXED_SCHEDULE_EVENTS['d7_fixed_morning'].id) &&
    morningCount > 0
  ) {
    const fixed = FIXED_SCHEDULE_EVENTS['d7_fixed_morning'];
    seenEventIds.add(fixed.id);
    usedTopicsToday.add(fixed.topic || fixed.category);
    selectedEvents.push({ ...fixed, day });
    morningCount--;
  }

  if (morningCount > 0) {
    const ev = pickFromDesignatedPool(morningPool, 'morning', 'Sáng', 'SÁNG');
    if (ev) selectedEvents.push(ev);
  }

  // 2. BUỔI CHIỀU (AFTERNOON)
  if (sjcEventToInsert && sjcEventToInsert.phase === 'afternoon' && afternoonCount > 0) {
    selectedEvents.push({
      ...sjcEventToInsert,
      day,
      title: sjcEventToInsert.title.startsWith('[CHIỀU]') ? sjcEventToInsert.title : `[CHIỀU] ${sjcEventToInsert.title}`,
    });
    afternoonCount--;
  } else if (
    day === 6 &&
    FIXED_SCHEDULE_EVENTS['d6_fixed_afternoon'] &&
    !seenEventIds.has(FIXED_SCHEDULE_EVENTS['d6_fixed_afternoon'].id) &&
    afternoonCount > 0
  ) {
    const fixed = FIXED_SCHEDULE_EVENTS['d6_fixed_afternoon'];
    seenEventIds.add(fixed.id);
    usedTopicsToday.add(fixed.topic || fixed.category);
    selectedEvents.push({ ...fixed, day });
    afternoonCount--;
  }

  if (afternoonCount > 0) {
    const ev = pickFromDesignatedPool(afternoonPool, 'afternoon', 'Chiều', 'CHIỀU');
    if (ev) selectedEvents.push(ev);
  }

  // 3. BUỔI TỐI (EVENING)
  if (sjcEventToInsert && sjcEventToInsert.phase === 'evening' && eveningCount > 0) {
    selectedEvents.push({
      ...sjcEventToInsert,
      day,
      title: sjcEventToInsert.title.startsWith('[TỐI]') ? sjcEventToInsert.title : `[TỐI] ${sjcEventToInsert.title}`,
    });
    eveningCount--;
  }

  if (eveningCount > 0) {
    const ev = pickFromDesignatedPool(eveningPool, 'evening', 'Tối', 'TỐI');
    if (ev) {
      selectedEvents.push(ev);
    } else {
      // Fallback chỉ khi pool cạn kiệt
      const rollcall = createFixedEveningRollcall(day);
      seenEventIds.add(rollcall.id);
      selectedEvents.push(rollcall);
    }
  }

  // Theo dõi nhiệm vụ quân sự nếu được chọn tự nhiên
  for (const ev of selectedEvents) {
    if (
      ev.category === 'military_duty' ||
      ev.topic === 'duty_team' ||
      ev.topic === 'night_guard' ||
      ev.topic === 'area_cleaning' ||
      ev.topic === 'mess_hall_duty'
    ) {
      if (options?.onMilitaryDutyTriggered) {
        options.onMilitaryDutyTriggered(ev.id);
      }
    }
  }

  // Chronological sort: Sáng (1) -> Chiều (3) -> Tối (4)
  const phaseRank: Record<string, number> = {
    morning: 1,
    noon: 2,
    afternoon: 3,
    evening: 4,
  };

  selectedEvents.sort((a, b) => (phaseRank[a.phase] || 1) - (phaseRank[b.phase] || 1));

  return selectedEvents;
}

// Alias for backwards compatibility
export const generateDailyEvents = generateDaySituations;

// ============================================================================
// 5. THẺ SỰ KIỆN BẤT NGỜ SJC (POPUP RANDOM - KHÔNG LỰA CHỌN)
// ============================================================================

export const SJC_POPUP_EVENTS: RandomPopupEvent[] = [
  {
    id: 'rnd_sjc_fanpage_content',
    title: 'Viết content gấp cho Fanpage Viện',
    description: '20h00, Chủ nhiệm CLB nhắn tin gấp: "Em ơi, làm gấp bài phản ánh sự kiện Hola cho Fanpage Viện nhé, rồi đăng luôn nhé!". Bạn phải tức tốc gõ bài và đăng tải trước 20h20 nộp điện thoại.',
    attributeEffects: { morale: -5, reputation: 6, health: -3 },
    category: 'sjc_random_popup',
    icon: '✍️',
    isSjc: true,
    sjcBadge: '[TIN KHẨN SJC]',
  },
  {
    id: 'rnd_sjc_viral_photo',
    title: 'Bức ảnh Hola triệu view',
    description: 'Bức ảnh khoảnh khắc rèn luyện ở Hola do bạn chụp trong giờ dùng điện thoại và cuối tuần được đăng lên Fanpage Viện, nhận về hàng trăm lượt tương tác và lời khen từ thầy cô.',
    attributeEffects: { morale: 12, reputation: 8 },
    category: 'sjc_random_popup',
    icon: '📸',
    isSjc: true,
    sjcBadge: '[TIN VUI SJC]',
  },
  {
    id: 'rnd_sjc_catch_4g_wave',
    title: 'Săn sóng 4G nộp bài thu hoạch',
    description: 'Chủ nhật là deadline bài thu hoạch chuyến đi thực tế cùng lớp Báo chí, nhưng mạng quá lag. Bạn phải chạy khắp đồi Hola tìm nơi bắt 4G mạnh nhất để kịp đăng bài và nộp tiểu luận.',
    attributeEffects: { morale: -4, reputation: 10 },
    category: 'sjc_random_popup',
    icon: '📶',
    isSjc: true,
    sjcBadge: '[ĐẶC NHIỆM SJC]',
  },
];

// Standard Random Popups
export const STANDARD_RANDOM_POPUP_EVENTS: RandomPopupEvent[] = [
  {
    id: 'rnd_nhat_50k',
    title: 'Lộc lá bất ngờ!',
    description: 'Trong lúc kéo dát giường lau bụi, bạn tình cờ nhặt được tờ 50.000đ kẹp sâu ở khe phản gỗ từ khóa trước để lại!',
    attributeEffects: { morale: 8, money: 50000 },
    icon: '💵',
  },
  {
    id: 'rnd_ong_dot',
    title: 'Tai nạn con ong!',
    description: 'Thấy con ong đậu trên ghế tưởng đã chết, bạn cầm giấy định vứt đi thì bị đốt trúng ngón tay sưng vù!',
    attributeEffects: { health: -12, morale: -5 },
    icon: '🐝',
  },
  {
    id: 'rnd_truot_chan_rach_quan',
    title: 'Trượt chân bìa rừng!',
    description: 'Giờ giải lao ra khám phá bìa rừng thông, bạn trượt chân ngã lấm lem bùn đất và rách một vạt gấu quần dã chiến!',
    attributeEffects: { morale: -10, reputation: -2, money: -10000 },
    icon: '🌲',
  },
  {
    id: 'rnd_quat_thoc_mat',
    title: 'Viêm họng đêm gió!',
    description: 'Đêm ngủ bật quạt thốc thẳng vào mặt cho mát, sáng dậy cổ họng khô khốc, viêm họng tắt cả tiếng!',
    attributeEffects: { health: -10, morale: -4 },
    icon: '💨',
  },
  {
    id: 'rnd_mat_nuoc_goi_dau',
    title: 'Sự cố mất nước!',
    description: 'Đang xoa đầy bọt dầu gội đầu thì vòi nước kêu khẹc khẹc rồi ngắt ngấm, bạn đành phải lấy chai nước khoáng dội tạm!',
    attributeEffects: { health: -5, morale: -8 },
    icon: '🚿',
  },
  {
    id: 'rnd_sap_tran_nhua',
    title: 'Sự cố nhà vệ sinh!',
    description: 'Đường ống nước nhà vệ sinh tầng trên bị rò rỉ làm sập một mảng trần nhựa, cả phòng phải nháo nhào phụ dọn nước tràn!',
    attributeEffects: { health: -6, morale: -6 },
    icon: '🛠️',
  },
  {
    id: 'rnd_lag_4g_deadline',
    title: 'Sóng 4G chập chờn!',
    description: 'Chủ Nhật đến hạn nộp bài thu hoạch trực tuyến mà mạng 4G đồi Hòa Lạc giật lag, bạn phải chạy khắp nơi tìm sóng!',
    attributeEffects: { morale: -7, health: -4 },
    icon: '📶',
  },
  {
    id: 'rnd_nham_dau_goi',
    title: 'Tắm nhầm dầu gội!',
    description: 'Vội vàng đi tắm lúc trời chập choạng tối, bạn lấy nhầm chai dầu gội đầu (Shampoo) thoa khắp người làm sữa tắm!',
    attributeEffects: { morale: -5 },
    icon: '🧴',
  },
  {
    id: 'rnd_gio_bay_moc_ao',
    title: 'Gió lốc đồi Hòa Lạc!',
    description: 'Cơn gió đồi chiều thổi mạnh bất ngờ hất tung 2 chiếc móc áo cùng đôi tất phơi trên dây rơi xuống mái che tầng dưới!',
    attributeEffects: { morale: -4, reputation: -2 },
    icon: '💨',
  },
  {
    id: 'rnd_mua_dong_tranh_may_say',
    title: 'Cơn mưa giông bất chợt!',
    description: 'Chiều tập ngoài bãi giông đổ mưa bất ngờ làm ướt sũng quân phục, tối đến cả phòng chen nhau chiếc máy sấy tóc!',
    attributeEffects: { health: -4, morale: -6 },
    icon: '🌧️',
  },
];

// Combined pool of random popup events
export const RANDOM_POPUP_EVENTS: RandomPopupEvent[] = [
  ...SJC_POPUP_EVENTS,
  ...STANDARD_RANDOM_POPUP_EVENTS,
];
