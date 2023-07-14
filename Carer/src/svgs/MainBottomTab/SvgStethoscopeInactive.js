import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '@utils/colors';

interface Props {
  color?: string;
  height?: number;
}

function SvgComponent(props: Props) {
  const { color, height } = props;
  return (
    <Svg
      width={24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.84 12.187a3.158 3.158 0 00-2.663 1.459c-.536-.014-1.012.085-1.432.294-1.282.634-1.696 2.073-2.097 3.465l-.002.008c-.589 2.05-1.044 3.31-2.911 3.426-.887.055-1.581-.176-2.107-.71-.777-.787-1.082-2.726-1.19-3.72-.04-.37.118-.73.417-.95 3.91-2.879 5.766-5.651 5.52-8.25-.233-2.47-2.287-3.985-3.355-4.613a1.8 1.8 0 10-.261 1.84c.808.587 1.808 1.574 1.936 2.93.1 1.043-.333 2.187-1.272 3.408l-8.465.004c-.925-1.223-1.355-2.359-1.26-3.393.117-1.254 1.766-2.808 1.766-2.808A1.799 1.799 0 006.53 3.3a1.8 1.8 0 00-3.539-.465v.002C1.878 3.57.228 5.01.021 7.21c-.264 2.773 1.882 5.726 6.338 8.83.184.128.32.707.495 1.457.288 1.227.682 2.91 1.568 3.812.8.814 1.83 1.224 3.062 1.224.116 0 .235-.003.357-.012 3.147-.192 3.887-2.763 4.427-4.64v-.003c.314-1.09.61-2.122 1.227-2.427.028-.014.06.027.094.069.034.042.069.086.102.076.02 1.728 1.417 2.909 3.15 2.909a3.16 3.16 0 10-.001-6.32zm-16.318.244h5.35a18.598 18.598 0 01-1.982 1.64 1.178 1.178 0 01-1.386-.005 19.331 19.331 0 01-1.982-1.635zm17.929 3.444c0 .102-.01.203-.028.301a1.79 1.79 0 10-3.17 0 1.613 1.613 0 113.197-.301z"
        fill={color === colors.classicBlue ? colors.blueAccent : '#FFF'}
      />
    </Svg>
  );
}

const SvgStethoscopeInactive = React.memo(SvgComponent);
export default SvgStethoscopeInactive;
