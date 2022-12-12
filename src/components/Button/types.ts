export interface IButtonProps {
    title: string;
    disabled: boolean;
    children?: React.ReactNode | React.ReactNode[]
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}