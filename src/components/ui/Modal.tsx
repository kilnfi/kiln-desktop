import { Dialog } from '@headlessui/react';
import { CloseIcon } from '../Icons';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	children: any;
	title: any;
	className?: string;
	isStatic?: boolean;
};

const Modal = ({ isOpen, onClose, title, className = '', children, isStatic = false }: Props) => {
	return (
		<Dialog open={isOpen} onClose={onClose} className={`fixed z-50 inset-0 animate-fade-in`} static={isStatic}>
			<div className="flex items-center justify-center min-h-screen">
				<Dialog.Overlay className="fixed inset-0 bg-black animate-fade-in-modal" />
				<div
					id="test"
					className={`overflow-y-scroll relative bg-white rounded w-full max-w-[480px] max-h-screen mx-auto ${className}`}
				>
					<div className="flex items-center gap-x-4 px-5 py-6 border-b border-gray-200">
						<h2 className="flex-1">{title}</h2>
						{!isStatic && (
							<div className="flex place-items-center">
								<button onClick={onClose}>
									<CloseIcon className="h-6 w-6 mx-auto text-gray-800" />
								</button>
							</div>
						)}
					</div>
					<div className="px-5 py-6">{children}</div>
				</div>
			</div>
		</Dialog>
	);
};

export default Modal;
