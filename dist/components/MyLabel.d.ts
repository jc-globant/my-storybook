/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * This is the message to be shown in the label
    */
    label: string;
    /**
    * This is the Label's default size
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Label's color
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Make all caps label
    */
    allCaps?: boolean;
    /**
    * Custom font color
    */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => JSX.Element;
