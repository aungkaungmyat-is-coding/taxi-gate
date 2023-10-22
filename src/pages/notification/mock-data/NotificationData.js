import {COLORS} from '../../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const notifications = [
  {
    value: 'Just invite 3 your friends, and you will get 3 free coupons code',
    label: 'Get 3 Free Coupons Now!',
    icon: (
      <MaterialIcons name="discount" size={24} color={COLORS.primaryColor} />
    ),
    backgroundColor: COLORS.secondaryColor,
  },
  {
    value:
      'Your booking has been confirmation, driver will be come in 3 minutes',
    label: 'Booking Successfully!',
    icon: <AntDesign name="checkcircleo" size={24} color={'#a9f2b7'} />,
    backgroundColor: '#e2fee8',
  },
  {
    value: 'Get discount 20% for all destination, use 20PERCENT coupon code',
    label: 'Only today!',
    icon: (
      <MaterialIcons name="discount" size={24} color={COLORS.primaryColor} />
    ),
    backgroundColor: COLORS.secondaryColor,
  },
  {
    value: 'Thank you for trip with ovlet, come back again John',
    label: 'Transaction complete',
    icon: <MaterialCommunityIcons name="cash" size={24} color={'#f6986c'} />,
    backgroundColor: '#feece2',
  },
];
