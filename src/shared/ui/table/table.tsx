import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const Table = forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  function Table({ className, ...props }, ref) {
    return (
      <div className="relative w-full overflow-auto rounded-md border border-border">
        <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
      </div>
    )
  }
)

const TableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  function TableHeader({ className, ...props }, ref) {
    return <thead ref={ref} className={cn("bg-bg-elevated", className)} {...props} />
  }
)

const TableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  function TableBody({ className, ...props }, ref) {
    return <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  }
)

const TableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  function TableRow({ className, ...props }, ref) {
    return <tr ref={ref} className={cn("border-b border-border transition-colors hover:bg-bg-elevated/50", className)} {...props} />
  }
)

const TableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  function TableHead({ className, ...props }, ref) {
    return <th ref={ref} className={cn("h-10 px-4 text-left font-mono text-xs font-medium uppercase tracking-wider text-fg-muted", className)} {...props} />
  }
)

const TableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  function TableCell({ className, ...props }, ref) {
    return <td ref={ref} className={cn("px-4 py-3 text-fg", className)} {...props} />
  }
)

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell }
