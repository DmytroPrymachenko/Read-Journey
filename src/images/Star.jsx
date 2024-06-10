const Star = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h32v32H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01389)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAADAFBMVEUAAADwwjnwyVvz0GfqpC/y023156/xykfyylDwu0L6+u/rpCProyX6567rpSn77sfy2X379dvyuy3tqCLyx0zonyXzzk7rpCTyyk386rjxzl3257P64GHqmBn/33nxxT793IbyyEHpniLyxkbroyb33W793Hnsnx3yxjvroCD1yUbqnx/roCHurib525D63pb00Fb546broiP44Hvqoin78NP2x0L8zmXwwjv923r+3H780nP1z0f+3on423zxx0T74qnwvT7qniP22XP55W/xyk/1zlbtpyD43lvzylLyzGL+35H72on+4Zr32VjxwkD324/xzFr322bxyE354WrqnCD10U7w2Irz0Fbspyj40EPtzWTqmhzt0G775mzvtjfuriby0Xr43lz44FzqnSH23mP651/73XDxujH012H65231zWj10nPttDvy2pD322j422DttS///97//+3//9v//9fqlRb//+r//+b//+P//szomhz//+D//9P//cH///H//cftpBn//NfsoBfrnBb//Lj93zb/+9D//9D/+qv/+9T++c7/+7P+717/+ab6527rmhf90lzwxkfxyT7ztiH+8GX+7Vf+61L+6Uv95UD3vR7uqxnxqRn/9sb/9L7/95fvyFD11kjwxUL81i7vtRv//Lz27bT/+rD+76n+6I3+3G7rnBz0sBr3tRjtnhX+9bH06af651/z0lP600H60if2wSb6xB7urxvslxX/+cr58rz/6Zn/4nr/4XH+1mTtzFv111jxzU34zDL82jD7zibvohX+87b+66D+8m7+12v6zFX33k/95kfz0ETzzEH94j75zj74xynxpRX9977/+KH/6ID/8nj75mr65lr441f32k39xDbzzSbwpCDwwR/0qxfvnBX++cTy4Zz/9Yfx13v33F344FP72Tn1wzT32C7488T+77D/86L25Jfy34jw0276yh/1xh/yuxv79sr94oX64WX84Un+xkP1tCv1rCT/75b60jj7uyvw1WX3yEz720fKdc0xAAAAcnRSTlMAAwIIDhEE/iYXCJyMMjAlIBH++b+po3dDQTUN/vPx5M7Nsq5ZVP7+/fLw3Mq7mHhhVE8qHhr+9/bp39/dwKJ7aFBF/fbz5+bW1M26s6KM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"
        id="b"
        width={72}
        height={72}
      />
    </defs>
  </svg>
);
export default Star;