//data

import { AiFillHome } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { MdSubscriptions } from 'react-icons/md';
import { BiLibrary } from 'react-icons/bi';
import { MdHistory } from 'react-icons/md';
import { BiVideo } from 'react-icons/bi';
import { BsStopwatch } from 'react-icons/bs';
import { MdLocalMovies } from 'react-icons/md';
import { SiFacebookgaming } from 'react-icons/si';
import { SiLivechat } from 'react-icons/si';
import { GiLargeDress } from 'react-icons/gi';
import { AiFillYoutube } from 'react-icons/ai';
import { SiYoutubestudio } from 'react-icons/si';
import { TbBrandYoutube } from 'react-icons/tb';
import { CgYoutube } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { FaHistory } from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import { MdFeedback } from 'react-icons/md';
import { GrChannel } from 'react-icons/gr';
import { MdCardMembership } from 'react-icons/md';
import { SiReasonstudios } from 'react-icons/si';
import { AiOutlineDatabase } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';

export const sideListItems = [
  { id: 1, text: 'Home', icon: <AiFillHome size={24} /> },
  { id: 2, text: 'Shorts', icon: <AiOutlinePlaySquare size={24} /> },
  { id: 3, text: 'Subscriptions', icon: <MdSubscriptions size={24} /> },
  { id: 4, divider: true },
  { id: 5, text: 'Library', icon: <BiLibrary size={24} /> },
  { id: 6, text: 'History', icon: <MdHistory size={24} /> },
  { id: 7, subdivision: true, text: 'Explore' },
  { id: 8, text: 'Trending', icon: <MdLocalMovies size={24} /> },
  { id:9, text: 'Shopping', icon: <MdLocalMovies size={24} /> },
  { id:10, text: 'Music', icon: <MdLocalMovies size={24} /> },
  { id: 11, text: 'Movies & Shows', icon: <MdLocalMovies size={24} /> },
  { id: 12, text: 'Gaming', icon: <SiFacebookgaming size={24} /> },
  { id: 13, text: 'Live', icon: <SiLivechat size={24} /> },
  { id: 14, text: 'Fashion & Beauty', icon: <GiLargeDress size={24} /> },
  { id: 15, subdivision: true, text: 'More from Youtube' },
  {
    id: 16,
    text: 'Youtube Premium',
    icon: <AiFillYoutube size={24} color="red" />,
  },
  {
    id: 17,
    text: 'Youtube Music',
    icon: <TbBrandYoutube size={24} color="red" />,
  },
  {
    id: 18,
    text: 'Youtube Kids',
    icon: <TbBrandYoutube size={24} color="red" />,
  },
  { id: 19, divider: true },
  { id: 20, text: 'Settings', icon: <FiSettings size={24} /> },
  { id: 21, text: 'Report History', icon: <FaHistory size={24} /> },
  { id: 22, text: 'Help', icon: <FiHelpCircle size={24} /> },
  { id: 23, text: 'Send Feedback', icon: <MdFeedback size={24} /> },
];

export const tabItems = [
  { id: 1, text: 'All' },
  { id: 2, text: 'Music' },
  { id: 3, text: 'A.R. Rahman' },
  { id: 4, text: 'Kannada Cinema' },
  { id: 5, text: 'Javascript' },
  { id: 6, text: 'Live' },
  { id: 7, text: 'Editing' },
  { id: 8, text: 'Web Development' },
  { id: 9, text: 'Anirudh Ravichander' },
  { id: 10, text: 'Film' },
  { id: 11, text: 'Debate' },
  { id: 12, text: 'Cricket' },
  { id: 13, text: 'Conversation' },
  { id: 14, text: 'Pop Music' },
  { id: 15, text: 'Recently Updated' },
];