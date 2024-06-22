import { FC, Fragment } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NAVS_FOOTER } from '../../../../entities/general/layout/lib/footer/consts';
import { ContactsBlock } from './ContactsBlock/ContactsBlock';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useStyles } from './styles';
import { useResponsive } from '../../../../shared/lib/hooks';

export const FooterTop: FC = () => {
  const classes = useStyles();
  const isMobile = useResponsive('down', 480);

  return (
    <Box className={classes.footer__top}>
      <Box className={classes.footer__top_content}>
        {NAVS_FOOTER.map((item) => {
          return (
            <Fragment key={item.nav.id}>
              {!isMobile ? (
                <Stack key={item.nav.id} direction="column" className={classes.list}>
                  <Link component={RouterLink} to={item.nav.path} mb={1.5}>
                    <Typography variant="h5" className={classes.title}>
                      {item.nav.name}
                    </Typography>
                  </Link>
                  <List className={classes.cats_links}>
                    {item.categories.map((catItem: any) => (
                      <ListItem key={catItem.id}>
                        <Link component={RouterLink} to={catItem.path}>
                          <Typography variant="subtitle1" noWrap className={classes.title}>
                            {catItem.name}
                          </Typography>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              ) : (
                <Accordion
                  classes={{
                    root: classes.acc,
                  }}
                >
                  <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                    <Typography textTransform="uppercase">{item.nav.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List className={classes.cats_links}>
                      {item.categories.map((catItem: any) => (
                        <ListItem key={catItem.id}>
                          <Link component={RouterLink} to={catItem.path}>
                            <Typography noWrap className={classes.title}>
                              {catItem.name}
                            </Typography>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              )}
            </Fragment>
          );
        })}
        <ContactsBlock />
      </Box>
    </Box>
  );
};
