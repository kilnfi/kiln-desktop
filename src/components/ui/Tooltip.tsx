import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { InfoIcon } from '../Icons';

type Props = {
	trigger?: any;
	children?: any;
	className?: string;
};

const Tooltip = ({ trigger, children, className }: Props) => {
	return (
		<TooltipPrimitive.Provider>
			<TooltipPrimitive.Root delayDuration={0}>
				<TooltipPrimitive.TooltipTrigger>
					{trigger || <InfoIcon className={`w-4 h-4 ${className}`} />}
				</TooltipPrimitive.TooltipTrigger>
				{children && (
					<TooltipPrimitive.Portal>
						<TooltipPrimitive.Content
							sideOffset={5}
							className="animate-fade-in rounded-md p-4 text-xs bg-black text-white z-[100] whitespace-pre-line max-w-screen"
						>
							{children}
							<TooltipPrimitive.Arrow className="fill-black" />
						</TooltipPrimitive.Content>
					</TooltipPrimitive.Portal>
				)}
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	);
};

export default Tooltip;
