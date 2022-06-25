import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { TProps } from './types';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export const AddModal: FC<TProps> = ({}) => {
    const [rootElement, setRootElement] = useState<Element | null>(null)
    // let rootElement: Element | null = null;

    useLayoutEffect(() => {
        setRootElement(document.createElement('div'))
    }, []);

    useEffect(() => {
        // rootElement = document.createElement('div');
        if (rootElement) modalRoot.appendChild(rootElement);

        return () => {
            if (rootElement) modalRoot.removeChild(rootElement);
        }
    }, [rootElement]);

    if (rootElement) return ReactDOM.createPortal(
        <div>modal</div>,
        rootElement as Element
    );

    return null;
}
