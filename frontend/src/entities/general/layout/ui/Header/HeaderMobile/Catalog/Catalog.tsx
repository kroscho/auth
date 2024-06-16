import { FC, useState } from 'react';
import { Box, Drawer, IconButton, Link, List, Stack, Typography } from '@mui/material';
import { CatWithSubCats, Cats, Tab as TabType, Tabs } from '../../../../lib';
import { Tab } from './Tab/Tab';
import { ListCats } from './ListCats/ListCats';
import { ListNavs } from './ListNavs/ListNavs';
import { ContactsBlock } from './ContactsBlock/ConstactsBlock';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

import { useStyles } from './styles';

interface CatalogProps {
  open: boolean;
  onClose: VoidFunction;
  RequestCallButton: FC;
}

export const Catalog: FC<CatalogProps> = ({ open, onClose, RequestCallButton }) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState<TabType>(Tabs[0]);
  const [activeCat, setActiveCat] = useState<CatWithSubCats>();

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box className={classes.container}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" className={classes.header}>
          {activeCat ? (
            <Box component={Link} sx={{ cursor: 'pointer' }} onClick={() => setActiveCat(undefined)}>
              <Stack direction="row" alignItems="center">
                <KeyboardArrowLeftOutlinedIcon />
                <Typography fontSize={18} fontWeight={600}>
                  {activeCat.cat.name}
                </Typography>
              </Stack>
            </Box>
          ) : (
            <Typography fontSize={18} fontWeight={600}>
              Каталог
            </Typography>
          )}
          <IconButton color="inherit" onClick={() => (activeCat ? setActiveCat(undefined) : onClose())}>
            <CloseOutlinedIcon />
          </IconButton>
        </Stack>
        <Stack direction="column">
          <Box className={classes.tabsHeader} display={activeCat ? 'none' : 'statik'}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" className={classes.tabs}>
              {Tabs.map((tab) => (
                <Tab key={tab.id} tab={tab} isActiveTab={activeTab.id === tab.id} onClick={() => setActiveTab(tab)} />
              ))}
            </Stack>
          </Box>
          <Stack component={List} direction="column">
            <ListCats
              activeTabId={activeTab.id}
              setActiveCat={setActiveCat}
              activeCat={!!activeCat}
              items={activeCat ? activeCat.subCats : Cats.map((c) => c.cat)}
            />

            <ListNavs />
          </Stack>
          <ContactsBlock RequestCallButton={RequestCallButton} />
        </Stack>
      </Box>
    </Drawer>
  );
};
