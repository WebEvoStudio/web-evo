import React from 'react';
import {NextPage} from 'next';
import {Search as SearchIcon} from '@mui/icons-material';
import {alpha, InputBase, styled} from '@mui/material';
import {useRouter} from 'next/navigation';

const MainSearch: NextPage = () => {
  const router = useRouter();
  const Search = styled('div')(({theme}) => ({
    'position': 'relative',
    'borderRadius': theme.shape.borderRadius,
    'backgroundColor': alpha(theme.palette.common.white, 0.15),
    '&:hover': {backgroundColor: alpha(theme.palette.common.white, 0.25)},
    'marginRight': theme.spacing(2),
    'marginLeft': 0,
    'width': '100%',
    [theme.breakpoints.up('sm')]: {marginLeft: theme.spacing(3), width: 'auto'},
  }));
  const SearchIconWrapper = styled('div')(({theme}) => ({
    position: 'absolute',
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({theme}) => ({
    'color': 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder="Search…"
        inputProps={{'aria-label': 'search'}}
        onKeyDown={({key, target}) => {
          const {value} = target as HTMLInputElement;
          if (key === 'Enter' && value) router.push(`/search?query=${value}`);
        }}
      />
    </Search>
  );
};
export default MainSearch;
