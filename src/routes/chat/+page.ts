import type { MessageInfo } from '../../components/Chat/chat-utils';
import type { PageLoad } from './$types';


let messages: MessageInfo[] = [
    {
        id: 0,
        host: true,
        name: 'James W',
        timestamp: 'Yesterday @ 2:30pm',
        message: 'Some message text.',
        color: 'variant-soft-primary'
    },
    {
        id: 1,
        host: false,
        name: 'FAIT',
        timestamp: 'Yesterday @ 2:45pm',
        message: 'Some message text.',
        color: 'variant-soft-primary'
    }
];

export const load: PageLoad = ({ params, url }) => {
    const chatWith = url.searchParams.get('chatWith');
    const conversation = 'main';

    let messageHistory: MessageInfo[] | null;
    
    if (chatWith === 'Stocks') {
        messageHistory = messages
    }
    else {
        messageHistory = null;
    }
    console.log("RELOADING...");
    console.log(chatWith);

	return {
		messages: messageHistory
	};
};