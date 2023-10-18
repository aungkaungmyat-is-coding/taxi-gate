import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {
  HISTORY_SCREEN,
  INVITE_FRIEND_SCREEN,
  NOTIFICATION_SCREEN,
  PAYMENT_SCREEN,
  SETTINGS_SCREEN,
} from './ScreenRoute';
import {COLORS} from '../styles';

export const DRAWER_ITEM = [
  {
    label: 'Payment',
    route: PAYMENT_SCREEN,
    icon: <AntDesign name="creditcard" size={24} color={COLORS.white} />,
  },
  {
    label: 'History',
    route: HISTORY_SCREEN,
    icon: <Octicons name="history" size={24} color={COLORS.white} />,
  },
  {
    label: 'Notifications',
    route: NOTIFICATION_SCREEN,
    icon: (
      <Ionicons name="notifications-outline" size={24} color={COLORS.white} />
    ),
  },
  {
    label: 'Invite Friend',
    route: INVITE_FRIEND_SCREEN,
    icon: <Octicons name="people" size={24} color={COLORS.white} />,
  },
  {
    label: 'Settings',
    route: SETTINGS_SCREEN,
    icon: <Feather name="settings" size={24} color={COLORS.white} />,
  },
];
