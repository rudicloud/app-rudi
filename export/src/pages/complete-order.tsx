import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import OrderInformation from '@components/order/order-information';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Divider from '@components/ui/divider';
import { useEffect } from 'react';
import { useCart } from '@contexts/cart/cart.context';
import Seo from '@components/seo/seo';
import axios from 'axios';
import React, { useState } from 'react';


export default function Order() {

  //const [params, setParams] = useState(0);
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("verified")
    console.log("Param", id)
    //setParams(id)
   // var options = {
   //   method: 'GET',
   //   //url: `https://rudicloud.vercel.app/api/v1/txns/${id}`,
   //   url: `https://ruduapi.vercel.app/api/v1/txns/1674172173370`,
   //   headers: {Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'}
   // };
   // 
   // axios.request(options).then(function (response) {
//
   //   setCustomer(response.data)
   //   localStorage.setItem("customerdata", JSON.str(response.data));
   //   console.log("response",customer);
   // }).catch(function (error) {
   //   console.error(error);
   // });
    const cart = localStorage.getItem('rudi-shule-cart');
const mydata = {
  orders: cart,
  //ref: id,
}
console.log("mydata", mydata)
    var config = {
      method: 'post',
      url: 'https://ruduapi.vercel.app/api/v1/orders',
      headers: {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type': 'application/json'
      },
      data: cart,
    };

    axios(config)
      .then(function (response) {
        localStorage.removeItem("rudi-shule-cart");

      })
      .catch(function (error) {
        console.log("new orders error ", error.message);

      });//
 }, [])
 //const { resetCart } = useCart();
 //useEffect(() => {
 //resetCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
 //}, []);
  return (
    <>
      <Seo
        title="Order"
        description="School Shopping at your fingertips."
        path="complete-order"
      />
      <Divider />
      <Container>
      </Container>
      <Divider />
    </>
  );
}

Order.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
