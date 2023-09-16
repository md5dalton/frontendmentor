import Profile from "./Profile"

export default ({ children, className, open, size="h-10 w-10" }) => (
    <div className={`${className} items-center text-lg`}>
        <Profile size={size} />
        {children}
    </div>
)