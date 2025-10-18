import { pageTitle } from 'ember-page-title';
import { WelcomePage } from 'ember-welcome-page';

<template>
  {{pageTitle "SuperRentals"}}

  {{outlet}}

  {{! The following component displays Ember's default welcome message. }}
  <WelcomePage />
  {{! Feel free to remove this! }}
</template>
