import { Theme } from '@mui/material/styles';
import Drawer from './Drawer';
import List from './List';
import Button from './Button';
import Link from './Link';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Drawer(theme), List(theme), Link(theme), Button(theme));
}
