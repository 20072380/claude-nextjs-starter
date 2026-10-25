import {
  Bell,
  Calendar,
  Heart,
  Home,
  Mail,
  Search,
  Settings,
  Star,
  Trash2,
  User,
  type LucideIcon,
} from "lucide-react";

// lucide-react: 필요한 아이콘만 import하면 번들에 해당 아이콘만 포함된다(tree-shaking).
// size 대신 Tailwind의 size-* 클래스로 크기를, text-* 클래스로 색을 지정한다.
const icons: { name: string; icon: LucideIcon }[] = [
  { name: "Home", icon: Home },
  { name: "Search", icon: Search },
  { name: "User", icon: User },
  { name: "Settings", icon: Settings },
  { name: "Bell", icon: Bell },
  { name: "Mail", icon: Mail },
  { name: "Calendar", icon: Calendar },
  { name: "Heart", icon: Heart },
  { name: "Star", icon: Star },
  { name: "Trash2", icon: Trash2 },
];

export default function LucideIconsExample() {
  return (
    <div className="grid w-full grid-cols-3 gap-4 sm:grid-cols-5">
      {icons.map(({ name, icon: Icon }) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Icon className="size-6" />
          <span className="font-mono text-xs text-muted-foreground">{name}</span>
        </div>
      ))}
    </div>
  );
}
