import clsx from 'clsx'

interface DrawerProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

export default function Drawer({ children, open = false, onClose }: DrawerProps) {
  return (
    <>
      <div
        className={clsx('fixed inset-0 z-40 h-screen w-screen bg-black/70', {
          hidden: !open
        })}
        onClick={onClose}
      />
      <div
        className={clsx('fixed inset-0 z-50 h-screen w-80 bg-white/90 p-5 text-black transition-transform', {
          'translate-x-0': open,
          '-translate-x-full': !open
        })}
      >
        {children}
      </div>
    </>
  )
}
