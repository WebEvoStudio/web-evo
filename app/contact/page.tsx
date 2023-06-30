import React from 'react';
import Contact from '../../ui/pages/contact';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Web Evo - 联系我们',
};
/**
 * app/contact
 * @constructor
 */
export default function Page() {
  return (<Contact></Contact>);
}
