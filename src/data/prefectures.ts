export interface Prefecture {
  id: string;
  name: string;
  shortName: string;
  status: 'active' | 'coming_soon' | 'undecided';
  statusLabel: string;
  account: string;
  email?: string;
  instagram?: string;
  themeColor?: string;
  description?: string;
}

export const prefectures: Prefecture[] = [
  {
    id: 'aomori',
    name: '青森県生徒会連盟',
    shortName: '青森',
    status: 'active',
    statusLabel: '準備中',
    account: 'aosf_seitokai',
    email: 'asf.seitokai@gmail.com',
    instagram: 'https://www.instagram.com/aosf_seitokai/',
    themeColor: '#D70419',
    description: '青森県内の高校生徒会をつなぎ、オフライン・オンラインでの交流や独自企画を進めていきます。'
  },
  {
    id: 'miyagi',
    name: '宮城県生徒会連盟',
    shortName: '宮城',
    status: 'coming_soon',
    statusLabel: 'Coming soon',
    account: 'msf_seitokai',
    description: '現在、連盟発足に向けて準備中です。'
  },
  {
    id: 'fukushima',
    name: '福島県生徒会連盟',
    shortName: '福島',
    status: 'coming_soon',
    statusLabel: 'Coming soon',
    account: 'fsf_seitokai',
    description: '現在、連盟発足に向けて準備中です。'
  },
  {
    id: 'iwate',
    name: '岩手県生徒会連盟',
    shortName: '岩手',
    status: 'undecided',
    statusLabel: '未定（募集中）',
    account: 'isf_seitokai',
    description: '岩手県で立ち上げに関わりたい生徒会役員の方を募集中です！'
  },
  {
    id: 'akita',
    name: '秋田県生徒会連盟',
    shortName: '秋田',
    status: 'undecided',
    statusLabel: '未定（募集中）',
    account: 'aksf_seitokai',
    description: '秋田県で立ち上げに関わりたい生徒会役員の方を募集中です！'
  },
  {
    id: 'yamagata',
    name: '山形県生徒会連盟',
    shortName: '山形',
    status: 'undecided',
    statusLabel: '未定（募集中）',
    account: 'ysf_seitokai',
    description: '山形県で立ち上げに関わりたい生徒会役員の方を募集中です！'
  }
];
