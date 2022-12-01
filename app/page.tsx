'use client';

import styled from '@emotion/styled';
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useUtils } from '../contexts/UtilsContext';
import { stringAvatar, stringToColor } from '../helpers/avatar';

const Logo = styled.div`
  flex-grow: 1;
`;

const RootPage: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const { setLoading, showAlert } = useUtils();
  const { signInWithGooglePopup, user, signOut } = useAuth();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Logo>
            <Image
              src="/rice-bowl.png"
              alt="Rice Bowl Icon"
              width={48}
              height={48}
            />
          </Logo>
          {user === null && (
            <Button
              color="inherit"
              onClick={async () => {
                try {
                  setLoading(true);
                  await signInWithGooglePopup();
                } catch (e) {
                  if (e instanceof Error) {
                    showAlert(e.message);
                  }
                } finally {
                  setLoading(false);
                }
              }}
            >
              Đăng nhập
            </Button>
          )}
          {!!user && (
            <>
              <IconButton
                id="appbar-menu-button"
                aria-controls={anchorEl ? 'appbar-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={anchorEl ? 'true' : undefined}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <Avatar sx={{ bgcolor: stringToColor(user.displayName || '') }}>
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="User Avatar"
                      width={40}
                      height={40}
                    />
                  ) : (
                    stringAvatar(user.displayName || '')
                  )}
                </Avatar>
              </IconButton>
              <Menu
                id="appbar-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={() => {
                  setAnchorEl(null);
                }}
                MenuListProps={{
                  'aria-labelledby': 'appbar-menu-button',
                }}
                keepMounted
              >
                <MenuItem
                  onClick={async () => {
                    try {
                      await signOut();
                    } catch (e) {
                      if (e instanceof Error) {
                        showAlert(e.message);
                      }
                    } finally {
                      setAnchorEl(null);
                      setLoading(false);
                    }
                  }}
                >
                  Đăng xuất
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default RootPage;
