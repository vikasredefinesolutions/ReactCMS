import styled from '@emotion/styled';
import { Switch } from '@mui/material';

const IOSSwitch = styled((props: any) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(() => ({
  width: '4rem',
  height: 28,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '200ms',
    '&.Mui-checked': {
      transform: 'translateX(36px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#159e48',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 24,
    height: 24,
    borderRadius: 4,
    opacity: '1 !important',
  },

  '& .MuiSwitch-track': {
    borderRadius: 4,
    backgroundColor: '#475569',
    opacity: 1,
    '&:after, &:before': {
      color: 'white',
      fontSize: '0.7rem',
      position: 'absolute',
      top: '6px',
    },
    '&:after': {
      content: "'Yes'",
      left: '10px',
    },
    '&:before': {
      content: "'No'",
      right: '10px',
    },
  },
}));

export default IOSSwitch;
