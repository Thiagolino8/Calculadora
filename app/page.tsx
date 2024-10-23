import { Button } from './Button'
import { Current } from './Current'
import { Operation } from './Operation'
import { Previous } from './Previous'

export default function Home() {
	return (
		<div className='h-screen w-full flex justify-center items-center'>
			<div className='grid justify-center grid-cols-[repeat(4,_6rem)] grid-rows-[minmax(7rem,_auto)_repeat(5,_6rem)] rounded-3xl overflow-hidden'>
				<div className='flex col-span-full bg-black/60 flex-col items-end justify-around p-5 break-all h-28'>
					<div
						className='text-white/75 text-2xl
'
					>
						<Previous /> <Operation />
					</div>
					<div className='text-white text-6xl font-bold'>
						<Current />
					</div>
				</div>
				<Button span operation='clear'>
					AC
				</Button>
				<Button operation='deleteDigit'>DEL</Button>
				<Button operation='chooseOperation'>÷</Button>
				<Button operation='addDigit'>7</Button>
				<Button operation='addDigit'>8</Button>
				<Button operation='addDigit'>9</Button>
				<Button operation='chooseOperation'>*</Button>
				<Button operation='addDigit'>4</Button>
				<Button operation='addDigit'>5</Button>
				<Button operation='addDigit'>6</Button>
				<Button operation='chooseOperation'>+</Button>
				<Button operation='addDigit'>1</Button>
				<Button operation='addDigit'>2</Button>
				<Button operation='addDigit'>3</Button>
				<Button operation='chooseOperation'>-</Button>
				<Button operation='addDigit'>.</Button>
				<Button operation='addDigit'>0</Button>
				<Button span operation='evaluate'>
					=
				</Button>
			</div>
		</div>
	)
}
