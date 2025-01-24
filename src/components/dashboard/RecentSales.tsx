import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>أح</AvatarFallback>
        </Avatar>
        <div className="mr-4 space-y-1">
          <p className="text-sm font-medium leading-none">أحمد محمد</p>
          <p className="text-sm text-muted-foreground">
            ahmed@example.com
          </p>
        </div>
        <div className="mr-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>سع</AvatarFallback>
        </Avatar>
        <div className="mr-4 space-y-1">
          <p className="text-sm font-medium leading-none">سعيد علي</p>
          <p className="text-sm text-muted-foreground">saeed@example.com</p>
        </div>
        <div className="mr-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>من</AvatarFallback>
        </Avatar>
        <div className="mr-4 space-y-1">
          <p className="text-sm font-medium leading-none">منى أحمد</p>
          <p className="text-sm text-muted-foreground">mona@example.com</p>
        </div>
        <div className="mr-auto font-medium">+$299.00</div>
      </div>
    </div>
  )
}