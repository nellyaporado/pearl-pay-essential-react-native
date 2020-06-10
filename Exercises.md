# List of exercises
Here is a list of exercieses.

Each exercise will have listed:
- working files - files that you should work on during the exercise
- utility files - components/utils that you should use as a helper for the exercise
- cheat files - files with solved exercise 

> Inside some working files we attached documentation links that will help you implement the exercise.

## Create a user banner with icon and button

We will start with implementing a UserBanner component that you can see on the slide. It consists of View with background, icon, text and touchable. As you can see, the background of a UserBanner is not solid, it has a gradient that we will also implement.

Working files:
- src/components/UserBanner.js

Utility components:
- Card
- SecondaryText

Documentation:
- Icons usage https://github.com/oblador/react-native-vector-icons#basic-example
- Icons browser (Let's use Material Icons) https://oblador.github.io/react-native-vector-icons/
- Linear Gradient https://docs.expo.io/versions/latest/sdk/linear-gradient/

Cheat files:
- src/components/UserBanner.cheat.js

## Create Wallet and LastTransaction components

Let's a `Wallet` and `LastTransaction` component. `Wallet` component should accept 4 props: `balance`, `label`, `lastTransaction`, `index`. 

`Index` prop will be needed later on. 
`LastTransaction` prop should be an object containing properties: 
- value (number), 
- label (string), 
- type (‘income’ | ‘outcome’). 

This prop should be passed to the `LastTransaction` component.

Working files:
- src/components/Wallet/Wallet.js
- src/components/Wallet/LastTransaction.js

Utility Components:
- SecondaryText from Typography
- Card
- Arrow

Cheat files:
- src/components/Wallet/Wallet.cheat.js
- src/components/Wallet/LastTransaction.cheat.js


## Create root Stack Navigator with two screens

Let's implement a basic Stack Navigator that has two screens and it’s possible to navigate from one to another.

Working files:
- App.js

Documentation
- Stack Navigator https://reactnavigation.org/docs/stack-navigator

Cheat files:
- App.cheat1.js

## Create Login screen

Let's implement a nice looking login screen. It should contain a logo, two text inputs and the button for submitting a login form.

Working files
- src/screens/Login.js

Utility Comopnents:
- PrimaryText
- Logo in assets

Cheat files
- src/screens/Login.cheat1.js

## Implement Logic functionallity

Implement login API call.

Fire request on button press.

Save token and username in SecureStorage.

Update data in AuthContext.

Working files:
- src/services.js
- src/screens/Login.js

Utility files:
- src/services.js
- src/context/AuthContext.js
- src/abstractStorage.js

Cheat files:
- src/services.cheat.js
- src/screens/Login.cheat2.js

## Render root navigator screens conditionally based on auth state. 

In this practice section we will finish implementing the login navigation flow. 

We want you to render login screen and bottom tabs screen conditionally. 

It should render:
- Login screen when authData is not set (when user is not logged in) 
- BottomTabs when user is logged in - authData is set.

After that let's test login flow

Working files:
- App.js

Cheat files:
- App.cheat2.js

## Create Bottom tab navigation with icons

Let's implement the Bottom Tab Navigator with 2 screens: 
- Wallets
- PlannedPayments

Working files:
- src/navigation/BottomTabs.js

Utility files:
- src/screems/Wallets.js
- src/screens/PlannedPayments.js

Documentation: 
- BottomTabNavigator https://reactnavigation.org/docs/bottom-tab-navigator

Cheat files:
- src/navigation/BottomTabs.cheat.js

## Create carousel based on FlatList

Let's display wallets as a horizontal carousel instead of vertical list. Carousel will support paging. 

We will use a FlatList component under the hood. The important props we need to pass to FlatList are `horizontal` and  `pagingEnabled`.

Working files:
- src/components/Carousel/Carousel.js

Documentation:
- FlatList https://reactnative.dev/docs/flatlist.html

Cheat files:
- src/components/Carousel/Carousel.cheat1.js

## Implement planned payments basing on SectionList 

Let's implement the `PlannedPayments` screen using the `SectionList` component.

Working files:
- src/screens/PlannedPayments.js

Utility Files:
- src/components/PaymentItem.js

Documentation:
- SectionList https://reactnative.dev/docs/sectionlist

Cheat files:
- src/screens/PlannedPayments.cheat1.js

## Create FAB button.

Let's implement the FAB button. 

It should be visible in Planned Payments screen. 
What’s more it should render on top of the rest of the content so it’s possible to always interact with this button. 

To implement the FAB you should use a `TouchableOpacity` component wrapped with a `View` with rounded corners so the FAB is circular.

Also, you should render an `+` icon inside and the icon should be centered. 

As a last step apply a shadow to emphasize the FAB. Shadow works differently on each platfrom, reffer to docs section below.

Working files:
- src/components/FAB.js

Documentation:
- Shadow generator https://ethercreative.github.io/react-native-shadow-generator/
- Shadow props for iOS https://reactnative.dev/docs/shadow-props#__docusaurus
- Elevation prop for Android https://reactnative.dev/docs/view-style-props#elevation

Cheat files:
- src/components/FAB.cheat.js

## Implement `SwipeableItem` wrapper component to handle item remove

As a first step you should import a `Swipeable` component from `react-native-gesture-handler/Swipeable`. Also we will need a `RectButton` component from `react-native-gesture-handler`. 

The component should accept two props: `children` and `onRemove`. Next, let’s render a Swipeable component and pass children prop as it’s child. It will move the responsibility of specifying swipeableItem content to the parent component making the SwipeableItem more generic.

In the next step, let’s pass 3 props to the Swipeable component. First is `friction` that specifies how much the visual interaction will be delayed compared to the gesture distance. e.g. value of `1` will indicate that the swipeable panel should exactly follow the gesture, `2` means it is going to be two times "slower". Let’s set it to `1`.

Next prop is `rightThreshold` - defines the distance from the right edge at which released panel will animate to the open state (or the open panel will animate into the closed state). By default it's a half of the panel's width. We can set it to `33%` of device width so it will be easier to open and close it.

Last prop is `renderRightActions` - it should be a function that returns a `React.Component` that should be rendered when the panel is opened. In our case let’s render a `RectButton` that stretches to the edges horizontally and displays `Icon` aligned to the right.  This button should invoke the `onRemove` function on press.

Working files
- src/components/SwipeableItem.js
- src/components/PlannedPaymentItem.js

Documentation
- Swipable https://software-mansion.github.io/react-native-gesture-handler/docs/component-swipeable.html
- RectButton https://software-mansion.github.io/react-native-gesture-handler/docs/component-buttons.html#rectbutton

Cheat files
- src/components/SwipeableItem.cheat.js
- src/components/PlannedPaymentItem.cheat.js

## Open Add Payment Plan screen as a  full-screen modal

Let's implement another `Stack Navigator`, but this time it will be full-screen modal. 
It should allow opening a `add planned payment` screen on fab button press.

Working files:
- src/navigation/PlannedPaymentsStack.js

Documentation: 
- https://reactnavigation.org/docs/modal

Cheat files:
- src/navigation/PlannedPaymentsStack.cheat.js

## Run WalletApp in the browser.

Let’s run a wallet app that we have just built in a web browser. 
We can do it by running `yarn web` in a terminal. 

Let’s play with the app for a while and see if there are any inconsistencies between web and mobile version.
