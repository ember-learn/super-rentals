import { LinkTo } from '@ember/routing';
import Jumbo from 'super-rentals/components/jumbo';
import Rental from 'super-rentals/components/rental';

<template>
  <Jumbo>
    <h2>Welcome to Super Rentals!</h2>
    <p>We hope you find exactly what you're looking for in a place to stay.</p>
    <LinkTo @route="about" class="button">About Us</LinkTo>
  </Jumbo>

  <div class="rentals">
    <ul class="results">
      {{#each @model as |rental|}}
        <li><Rental @rental={{rental}} /></li>
      {{/each}}
    </ul>
  </div>
</template>
