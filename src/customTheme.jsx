export const customTheme = {
  navbar: {
    styles: {
      base: {
        navbar: {
          initial: {
           px: 'px-md lg:px-xxl',
           borderRadius: 'rounded-none',
           display: 'flex',
           height: 'h-max',
           maxWidth: 'max-w-full'
          },
          shadow: {
            boxShadow: "shadow-md",
          },
          blurred: {
            backdropFilter: "backdrop-saturate-0 backdrop-blur-2xl",
            bgOpacity: "bg-opacity-80",
            borderWidth: "border",
            borderColor: "border-white/80",
          },
          fullWidth: {
            width: "w-full",
            maxWidth: "max-w-full",
            rounded: "rounded-none",
            px: "px-4",
          },
        },
      },
      variants: { 
        gradient: {
          transparent: {
            backgroud: "bg-gradient-to-b from-[#66307D63] to-[#F3F2FB00]",
            boxShadow: "shadow-none",
          },
        },
      },
    },
  },
};