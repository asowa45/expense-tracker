const currency = '$';

export const money = (figure) => {

    let amount = parseFloat(figure);

    return (amount >= 0)? `${currency}${numberWithCommas(Math.abs(amount).toFixed(2))}` : 
    `-${currency}${numberWithCommas(Math.abs(amount).toFixed(2))}`;
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}