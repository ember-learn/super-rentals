import { LinkTo } from '@ember/routing';
import Jumbo from 'super-rentals/components/jumbo';
import Rentals from 'super-rentals/components/rentals';

<template>
  <Jumbo>
    <h2>Welcome to Super Rentals!</h2>
    <p>We hope you find exactly what you're looking for in a place to stay.</p>
    <LinkTo @route="about" class="button">About Us</LinkTo>
  </Jumbo>

  <Rentals @rentals={{@model}} />
</template>
