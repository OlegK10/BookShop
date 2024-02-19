import { FC } from 'react';
import { IconComponent, IconsEnum, PropsIconComponent } from './IconsEnumList';

interface IIcon {
    type: IconsEnum;
    size?: number;
    stroke?: number;
    fill?: [string];
}

const Icon: FC<IIcon> = ({ type, size = 25, stroke = 2, fill = ['#1E1E1E'] }: IIcon) => {
    const props: PropsIconComponent = {
        size: size,
        stroke: stroke,
        fill: fill
    }

    const icon = IconComponent[type](props);
    return icon ? icon as React.ReactElement : null;
};

export default Icon;


