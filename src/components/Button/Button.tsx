import { FC } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface Button {
	appearance: string,
	link?: string,
	label: string,
	className?: string,
}
export const Button: FC<Button> = ({appearance, link, label, className, ...props}) => {
 return link ?
	 	(
        <a
            className={cn(styles.button, className, {
                [styles.arrow]: appearance === 'arrow',
                [styles.solid]: appearance === 'solid',
                [styles.big]: appearance === 'big',
            })}
            href={link}
            target='_blank'
            rel='noreferrer noopener'
						{...props}
        >
            <span>{label}</span>
        </a>
    ) : (
        <button
            className={cn(styles.button, className, {
                [styles.big]: appearance === 'big',
                [styles.circle]: appearance === 'circle',
            })}
            aria-label={label}
						{...props}
        >
            <span>{label}</span>
        </button>
    );
}