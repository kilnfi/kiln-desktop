import InputsContextProvider from '../contexts/InputsContext';
import OptionsContextProvider from '../contexts/OptionsContext';
import OptionsForm from '../components/forms/OptionsForm';
import UsageResults from '../components/results/UsageResults';
import SdkForm from '../components/forms/SdkForm';
import InputsForm from '../components/forms/InputsForm';
import { KilnLogoShort } from '../components/Icons';
// import ExecutionResult from '../components/results/ExecutionResult';

const Home = () => (
	<OptionsContextProvider>
		<InputsContextProvider>
			<div className="flex laptop:flex-row flex-col my-16">
				<div className="flex flex-col laptop:w-mid px-8 space-y-4">
					<div className="flex items-center">
						<KilnLogoShort className="w-10 h-10" />
						<div className="flex flex-col">
							<p className="text-2xl font-bold">
								<span className="text-primary">Kiln Connect Client</span>
							</p>
							<p className="text-caption-3">A desktop app to use Kiln Connect</p>
						</div>
					</div>
					<OptionsForm />
					<SdkForm />
				</div>
				<div className="flex flex-col laptop:w-mid px-8 space-y-8 mb-16">
					<UsageResults />
					<InputsForm />
					{/* <ExecutionResult /> */}
				</div>
			</div>
		</InputsContextProvider>
	</OptionsContextProvider>
);

export default Home;
