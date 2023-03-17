import { useState } from 'react';

import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Textarea from '../ui/Textarea';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	title: any;
	result: string;
};

const ResultModal = ({ isOpen, onClose, title, result }: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title={title} className="w-[480px]">
			<div className="flex flex-col space-y-4">
				<Textarea className="whitespace-pre max-h-[360px]" name="result" readOnly={true} value={result} />
				<Button onClick={onClose}>Close</Button>
			</div>
		</Modal>
	);
};

export default ResultModal;
