export const customTheme = {
  navbar: {
    styles: {
      base: {
        navbar: {
          initial: {
            px: 'px-md md:px-xl xl:px-0',
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
  typography: {
    defaultProps: {
      color: 'text-textMain',
      textGradient: false,
      className: "",
    },
    valid: {
      variants: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "lead",
        "paragraph",
        "small",
      ],
      colors: [
        "black",
        "primary"
      ],
    },
    styles: {
      variants: {
        h1: {
          fontFamily: 'font-main',
          fontSize: 'text-[48px] md:text-[102px]',
          fontWeight: "font-[800]",
          lineHeight: "leading-normal",
        },
        h2: {
          fontFamily: 'font-main',
          fontSize: 'text-[36px] md:text-[48px]',
          fontWeight: "font-[800]",
          lineHeight: "leading-normal",
        },
        h3: {
          fontFamily: 'font-notes',
          fontSize: 'text-[32px] md:text-[48px]',
          fontWeight: "font-[400]",
          lineHeight: "leading-normal",
        },
        h4: {
          fontFamily: 'font-main',
          fontSize: 'md:text-[16px]',
          fontWeight: "font-[500]",
          lineHeight: "leading-normal",
        },
        small: {
          fontFamily: 'font-notes',
          fontSize: 'text-[16px] md:text-[20px]',
          fontWeight: "font-[400]",
          lineHeight: "leading-normal",
        },
        lead: {
          fontFamily: 'font-main',
          fontSize: 'text-[18px]',
          fontWeight: "font-[700]",
          lineHeight: "leading-normal",
        },
        paragraph: {
          fontFamily: 'font-main',
          fontSize: 'text-[16px] md:text-[24px]',
          fontWeight: "font-[300]",
          lineHeight: "leading-normal",
        },
      },
      textGradient: {
        bgClip: "bg-clip-text",
        color: "text-transparent",
        // color: "bg-gradient-to-r from-primary to-[#699FF5]",
      },
      colors: {
        black: {
          color: "text-black",
        },
        purple: {
          color: "text-primary",
          gradient: "bg-gradient-to-r from-primary to-[#699FF5]"
          
        },
      },
    },


  },
  button : {
    defaultProps: {
      variant: "filled",
      size: "lg",
      color: "primary",
      fullWidth: false,
      ripple: true,
      className: "",
    },
    valid : {
      colors: [
        'purple',
      ],
    },
    styles : {
      base : {

      },
      sizes: {
        sm: {
          fontSize: "text-xs",
          py: "py-2",
          px: "px-4",
          borderRadius: "rounded-lg",
        },
        md: {
          fontSize: "text-xs",
          py: "py-3",
          px: "px-6",
          borderRadius: "rounded-lg",
        },
        lg: {
          fontFamily: 'font-main',
          fontSize: 'text-[18px]',
          fontWeight: "font-[700]",
          lineHeight: "leading-normal",
          py: "py-3.5",
          px: "px-md",
          display: "flex",
          gap: 'gap-xs',
          alignItems: "items-center",
          justifyContent: "justify-center",
          minWidth: "min-w-[180px]",
          borderRadius: "rounded-full",
          textTransform: "capitalize"
        },
      },
      variants : {
        filled : {
          purple: {
            backgroud: "bg-primary",
            color: "text-white",
            shadow: "shadow-md shadow-purple-500/20",
            hover: "hover:shadow-lg hover:shadow-purple-500/40",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
          },
        },
      },
    },
  },
};