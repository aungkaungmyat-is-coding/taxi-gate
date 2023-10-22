import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../../../styles';

export const settingsData = [
  {
    id: 1,
    icon: (
      <Ionicons
        name="notifications-outline"
        size={24}
        color={COLORS.primaryColor}
      />
    ),
    label: 'Notifications',
  },
  {
    id: 2,
    icon: (
      <MaterialIcons name="security" size={24} color={COLORS.primaryColor} />
    ),
    label: 'Security',
  },
  {
    id: 3,
    icon: (
      <MaterialIcons name="language" size={24} color={COLORS.primaryColor} />
    ),
    label: 'Language',
  },
  {
    id: 4,
    icon: (
      <MaterialIcons name="privacy-tip" size={24} color={COLORS.primaryColor} />
    ),
    label: 'Privacy & Policy',
  },
  {
    id: 5,
    icon: (
      <Ionicons name="bookmark-outline" size={24} color={COLORS.primaryColor} />
    ),
    label: 'Terms & Condition',
  },
  {
    id: 6,
    icon: (
      <SimpleLineIcons name="envelope" size={24} color={COLORS.primaryColor} />
    ),
    label: 'Contact Us',
  },
];
