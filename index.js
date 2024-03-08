import OutsideClickHandler from 'react-outside-click-handler';
 
function MyComponent() {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        alert('You clicked!!!');
      }}
    >
      Hello
    </OutsideClickHandler>
  );
}