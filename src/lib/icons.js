import * as React from 'react';

const icons = {
  appstore: (
    <svg
      className='icon-appstore'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>App Store icon</title>
      <path d='M12.0002 1.50117C6.19993 1.50117 1.50024 6.20086 1.50024 12.0012C1.50024 17.8015 6.19993 22.5012 12.0002 22.5012C17.8005 22.5012 22.5002 17.8015 22.5002 12.0012C22.5002 6.20086 17.8005 1.50117 12.0002 1.50117ZM8.01587 16.5898C7.95143 16.6997 7.8592 16.7907 7.74845 16.8536C7.63769 16.9165 7.51232 16.9492 7.38493 16.9484C7.2551 16.9495 7.12751 16.9144 7.01649 16.8471C6.93383 16.7992 6.86144 16.7354 6.80348 16.6595C6.74552 16.5835 6.70312 16.4969 6.67873 16.4045C6.65435 16.3121 6.64844 16.2159 6.66135 16.1212C6.67427 16.0265 6.70575 15.9354 6.75399 15.8529L7.47071 14.6613C7.50693 14.5998 7.5586 14.5489 7.6206 14.5135C7.6826 14.4781 7.75277 14.4596 7.82415 14.4598H7.93008C8.44993 14.4598 8.81368 14.7724 8.91961 15.0752L8.01587 16.5898ZM14.0838 14.246L9.39024 14.2512H6.27071C6.17256 14.2516 6.07535 14.2321 5.98498 14.1938C5.8946 14.1555 5.81295 14.0992 5.74496 14.0285C5.67698 13.9577 5.62408 13.8738 5.58948 13.782C5.55488 13.6901 5.5393 13.5922 5.54368 13.4941C5.55868 13.1004 5.90227 12.8023 6.29368 12.8023H8.55493L11.2357 8.23898L10.3676 6.76008C10.1721 6.42305 10.2588 5.97867 10.594 5.7668C10.6766 5.71336 10.7692 5.67718 10.8662 5.66044C10.9631 5.6437 11.0625 5.64674 11.1582 5.66938C11.254 5.69201 11.3442 5.73378 11.4234 5.79217C11.5026 5.85056 11.5692 5.92436 11.6191 6.00914L12.0832 6.8018H12.0884L12.5529 6.00914C12.6029 5.9248 12.6694 5.8514 12.7484 5.7933C12.8274 5.73521 12.9172 5.69361 13.0126 5.67099C13.108 5.64838 13.207 5.64521 13.3037 5.66166C13.4003 5.67812 13.4927 5.71388 13.5752 5.7668C13.9085 5.97867 13.9943 6.42305 13.7974 6.76148L12.9293 8.24039L12.0856 9.67898L10.2532 12.8037V12.8088H12.9537C13.2921 12.8088 13.7163 12.9907 13.8879 13.2832L13.9029 13.3137C14.0543 13.571 14.1401 13.7477 14.1401 14.0051C14.1376 14.0886 14.119 14.1709 14.0852 14.2474L14.0838 14.246ZM17.7284 14.2512H16.4576V14.2563L17.3866 15.8365C17.4866 16.0029 17.5171 16.2019 17.4718 16.3906C17.4265 16.5794 17.3089 16.7428 17.1443 16.8457C17.0302 16.9153 16.8992 16.9521 16.7655 16.9521C16.6385 16.952 16.5136 16.9191 16.4031 16.8565C16.2925 16.7939 16.2 16.7038 16.1346 16.5949L14.7616 14.2577L13.9085 12.8046L12.8079 10.923C12.6485 10.6544 12.5618 10.3488 12.5565 10.0365C12.5511 9.72411 12.6273 9.41575 12.7774 9.1418C12.9949 8.75789 13.1613 8.65711 13.1613 8.65711L15.6096 12.798H17.7148C18.1085 12.798 18.4465 13.1009 18.4648 13.4894C18.4686 13.5882 18.4523 13.6868 18.4171 13.7792C18.3818 13.8715 18.3283 13.9558 18.2596 14.027C18.191 14.0981 18.1086 14.1546 18.0176 14.1932C17.9265 14.2317 17.8286 14.2514 17.7298 14.2512H17.7284Z' />
    </svg>
  ),
  camera: (
    <svg
      className='icon-camera'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Camera icon</title>
      <path d='M16.8734 9.34375C17.5598 8.54355 18.5451 7.99921 19.6874 7.99921H28.3124C29.4548 7.99921 30.44 8.54355 31.1264 9.34375C31.1579 9.38039 31.1866 9.41925 31.2124 9.46004L33.6661 13.3369C34.0486 13.7597 34.5383 13.9992 34.9687 13.9992H40.4999C41.5608 13.9992 42.5782 14.4206 43.3284 15.1708C44.0785 15.9209 44.4999 16.9383 44.4999 17.9992V35.9992C44.4999 37.0601 44.0785 38.0775 43.3284 38.8276C42.5782 39.5778 41.5608 39.9992 40.4999 39.9992H7.49994C6.43907 39.9992 5.42166 39.5778 4.67151 38.8276C3.92137 38.0775 3.49994 37.0601 3.49994 35.9992V17.9992C3.49994 16.9383 3.92137 15.9209 4.67151 15.1708C5.42166 14.4206 6.43907 13.9992 7.49994 13.9992H8.37503V12.7476C8.37503 12.1953 8.82274 11.7476 9.37503 11.7476H11.6266C12.1788 11.7476 12.6266 12.1953 12.6266 12.7476V13.9992H13.1249C13.5196 13.9992 13.9286 13.7918 14.3329 13.3383L16.7875 9.46004C16.8133 9.41925 16.842 9.38039 16.8734 9.34375ZM10.6266 13.9992V13.7476H10.375V13.9992H10.6266ZM18.4351 10.5964L15.9818 14.4727C15.9561 14.5133 15.9275 14.552 15.8963 14.5885C15.2632 15.3277 14.332 15.9992 13.1249 15.9992H7.49994C6.96951 15.9992 6.4608 16.2099 6.08573 16.585C5.71065 16.9601 5.49994 17.4688 5.49994 17.9992V35.9992C5.49994 36.5296 5.71065 37.0383 6.08573 37.4134C6.4608 37.7885 6.96951 37.9992 7.49994 37.9992H40.4999C41.0304 37.9992 41.5391 37.7885 41.9141 37.4134C42.2892 37.0383 42.4999 36.5296 42.4999 35.9992V17.9992C42.4999 17.4688 42.2892 16.9601 41.9141 16.585C41.5391 16.2099 41.0304 15.9992 40.4999 15.9992H34.9687C33.7937 15.9992 32.767 15.3631 32.1036 14.5885C32.0723 14.552 32.0438 14.5133 32.0181 14.4727L29.5647 10.5964C29.2069 10.2028 28.7676 9.99921 28.3124 9.99921H19.6874C19.2323 9.99921 18.793 10.2028 18.4351 10.5964ZM23.9999 18.9979C20.41 18.9979 17.4999 21.9081 17.4999 25.4979C17.4999 29.0878 20.41 31.9979 23.9999 31.9979C27.5897 31.9979 30.4999 29.0878 30.4999 25.4979C30.4999 21.9081 27.5897 18.9979 23.9999 18.9979ZM15.4999 25.4979C15.4999 20.8035 19.3054 16.9979 23.9999 16.9979C28.6943 16.9979 32.4999 20.8035 32.4999 25.4979C32.4999 30.1923 28.6943 33.9979 23.9999 33.9979C19.3054 33.9979 15.4999 30.1923 15.4999 25.4979Z' />
    </svg>
  ),
  chatbox: (
    <svg
      className='icon-chatbox'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Chatbox icon</title>
      <path d='M4.87299 2.24912L4.87512 2.24911L19.1251 2.24912V2.99945L19.1272 2.24912C20.021 2.25166 20.8774 2.60783 21.5094 3.23982C22.1414 3.8718 22.4976 4.72823 22.5001 5.62198L22.5001 5.62412L22.5001 14.6241L22.5001 14.6262C22.4976 15.52 22.1414 16.3764 21.5094 17.0084C20.8774 17.6404 20.021 17.9966 19.1272 17.9991L19.1251 17.9991H11.5195L7.2304 21.5752C7.00686 21.7615 6.69567 21.8018 6.43209 21.6783C6.1685 21.5549 6.00012 21.2902 6.00012 20.9991V17.9991H4.87512L4.87299 17.9991C3.97923 17.9966 3.12281 17.6404 2.49082 17.0084C1.85884 16.3764 1.50267 15.52 1.50013 14.6262L1.50012 14.6241V5.62198C1.50266 4.72823 1.85884 3.8718 2.49082 3.23982C3.12281 2.60783 3.97923 2.25166 4.87299 2.24912ZM19.124 3.74912H4.87628C4.37922 3.75079 3.90298 3.94898 3.55148 4.30048C3.19999 4.65197 3.00179 5.12821 3.00012 5.62527V14.623C3.00179 15.12 3.19999 15.5963 3.55148 15.9478C3.90292 16.2992 4.37907 16.4974 4.87605 16.4991H6.75012C7.16433 16.4991 7.50012 16.8349 7.50012 17.2491V19.3973L10.6625 16.7607V16.7607C10.8647 16.5919 11.1203 16.4991 11.3837 16.4991V16.4991H19.1242C19.6212 16.4974 20.0973 16.2992 20.4488 15.9478C20.8002 15.5963 20.9984 15.1202 21.0001 14.6232V5.62505C20.9984 5.12807 20.8002 4.65192 20.4488 4.30048C20.0973 3.94898 19.621 3.75079 19.124 3.74912Z' />
      <path d='M7.49997 11.6245C8.3284 11.6245 8.99997 10.953 8.99997 10.1245C8.99997 9.2961 8.3284 8.62453 7.49997 8.62453C6.67155 8.62453 5.99997 9.2961 5.99997 10.1245C5.99997 10.953 6.67155 11.6245 7.49997 11.6245Z' />
      <path d='M12 11.6245C12.8284 11.6245 13.5 10.953 13.5 10.1245C13.5 9.2961 12.8284 8.62453 12 8.62453C11.1716 8.62453 10.5 9.2961 10.5 10.1245C10.5 10.953 11.1716 11.6245 12 11.6245Z' />
      <path d='M16.5 11.6245C17.3285 11.6245 18 10.953 18 10.1245C18 9.2961 17.3285 8.62453 16.5 8.62453C15.6716 8.62453 15 9.2961 15 10.1245C15 10.953 15.6716 11.6245 16.5 11.6245Z' />
    </svg>
  ),
  clip: (
    <svg
      className='icon-clip'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Clip icon</title>
      <path d='M9.19062 3.23619C9.67111 3.03546 10.1867 2.9321 10.7074 2.9321C11.2281 2.9321 11.7437 3.03546 12.2241 3.23619C12.7046 3.43692 13.1405 3.73103 13.5065 4.10147C13.8724 4.47191 14.1612 4.9113 14.3561 5.39418C14.5504 5.87566 14.6475 6.39082 14.6418 6.90997L14.6357 15.7555C14.6248 16.4455 14.343 17.1034 13.8513 17.5875C13.3596 18.0715 12.6972 18.3428 12.0072 18.3428C11.3172 18.3428 10.6549 18.0715 10.1632 17.5875C9.67142 17.1034 9.3897 16.4455 9.3788 15.7555L9.37862 15.7437L9.37871 9.00073C9.37871 8.58652 9.7145 8.25073 10.1287 8.25073C10.5429 8.25073 10.8787 8.58652 10.8787 9.00073V15.737C10.8847 16.0314 11.0055 16.3118 11.2154 16.5184C11.4266 16.7263 11.7109 16.8428 12.0072 16.8428C12.3035 16.8428 12.5879 16.7263 12.799 16.5184C13.009 16.3118 13.1298 16.0312 13.1357 15.7368L13.1418 6.89632C13.1457 6.57413 13.0857 6.25437 12.9651 5.95558C12.8445 5.65678 12.6658 5.38489 12.4394 5.15568C12.2129 4.92646 11.9432 4.74447 11.6459 4.62026C11.3486 4.49606 11.0296 4.4321 10.7074 4.4321C10.3852 4.4321 10.0662 4.49606 9.76885 4.62026C9.47154 4.74447 9.20184 4.92646 8.97539 5.15568C8.74893 5.38489 8.57023 5.65678 8.44964 5.95558C8.32905 6.25437 8.26896 6.57413 8.27287 6.89632L8.27298 6.90542L8.27293 15.8141C8.26578 16.308 8.35681 16.7984 8.54089 17.2568C8.72496 17.7152 8.99832 18.1325 9.34508 18.4843C9.69184 18.8361 10.1051 19.1155 10.5608 19.3062C11.0165 19.4968 11.5055 19.595 11.9995 19.595C12.4935 19.595 12.9825 19.4968 13.4382 19.3062C13.8939 19.1155 14.3071 18.8361 14.6539 18.4843C15.0007 18.1325 15.274 17.7152 15.4581 17.2568C15.6422 16.7984 15.7333 16.308 15.7261 15.8141L15.726 15.8032L15.7261 7.48855C15.7261 7.07433 16.0618 6.73855 16.4761 6.73855C16.8903 6.73855 17.226 7.07433 17.226 7.48855V15.798C17.2353 16.4888 17.1075 17.1746 16.8501 17.8158C16.5919 18.4587 16.2085 19.0438 15.7222 19.5372C15.2359 20.0306 14.6563 20.4225 14.0172 20.6899C13.3782 20.9573 12.6923 21.095 11.9995 21.095C11.3067 21.095 10.6208 20.9573 9.98174 20.6899C9.34265 20.4225 8.76309 20.0307 8.27678 19.5372C7.79046 19.0438 7.40708 18.4587 7.14892 17.8158C6.89146 17.1746 6.76368 16.4888 6.77293 15.798V6.90973C6.76726 6.39066 6.86436 5.87559 7.05865 5.39418C7.25354 4.9113 7.54234 4.47191 7.90831 4.10147C8.27428 3.73103 8.71014 3.43692 9.19062 3.23619Z' />
    </svg>
  ),
  compass: (
    <svg
      className='icon-compass'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Compass icon</title>
      <path d='M2.25 11.9996C2.25 6.61665 6.61703 2.24962 12 2.24962C17.383 2.24962 21.75 6.61665 21.75 11.9996C21.75 17.3826 17.383 21.7496 12 21.7496C6.61703 21.7496 2.25 17.3826 2.25 11.9996ZM12 3.74962C7.44546 3.74962 3.75 7.44508 3.75 11.9996C3.75 16.5541 7.44546 20.2496 12 20.2496C16.5545 20.2496 20.25 16.5541 20.25 11.9996C20.25 7.44508 16.5545 3.74962 12 3.74962Z' />
      <path d='M16.4375 7.07512L10.9438 9.27262C10.5665 9.42351 10.2237 9.64947 9.9364 9.93681C9.64906 10.2242 9.42309 10.5669 9.2722 10.9442L7.07471 16.4379C7.04743 16.5061 7.04075 16.5807 7.0555 16.6526C7.07025 16.7245 7.10578 16.7905 7.15769 16.8424C7.20959 16.8943 7.27559 16.9299 7.3475 16.9446C7.4194 16.9594 7.49406 16.9527 7.56221 16.9254L13.056 14.7279C13.4333 14.577 13.776 14.3511 14.0633 14.0637C14.3507 13.7764 14.5766 13.4337 14.7275 13.0564L16.925 7.56262C16.9523 7.49447 16.959 7.41981 16.9442 7.34791C16.9295 7.276 16.8939 7.21 16.842 7.1581C16.7901 7.10619 16.7241 7.07066 16.6522 7.05591C16.5803 7.04116 16.5057 7.04784 16.4375 7.07512V7.07512ZM11.9999 13.1253C11.7774 13.1253 11.5598 13.0593 11.3748 12.9357C11.1898 12.8121 11.0456 12.6364 10.9605 12.4308C10.8753 12.2252 10.8531 11.999 10.8965 11.7808C10.9399 11.5626 11.047 11.3621 11.2044 11.2048C11.3617 11.0474 11.5622 10.9403 11.7804 10.8969C11.9986 10.8535 12.2248 10.8758 12.4304 10.9609C12.6359 11.0461 12.8116 11.1903 12.9353 11.3753C13.0589 11.5603 13.1249 11.7778 13.1249 12.0003C13.1249 12.2986 13.0063 12.5848 12.7954 12.7958C12.5844 13.0067 12.2982 13.1253 11.9999 13.1253Z' />
    </svg>
  ),
  close: (
    <svg
      className='icon-close'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Close icon</title>
      <path d='M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z' />
    </svg>
  ),
  email: (
    <svg
      className='icon-email'
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Email icon</title>
      <path d='M831.936 768L192 768.192V378.304l302.816 192.704a32.096 32.096 0 0 0 34.4 0L832 378.304 831.936 768zM192 255.776L192.096 256 832 255.776v46.656l-320 203.616L192 302.432V255.776zM831.936 192H192.096A64 64 0 0 0 128 255.776v512.416C128 803.36 156.768 832 192.096 832h639.84A64 64 0 0 0 896 768.192V255.776A64 64 0 0 0 831.936 192z' />
    </svg>
  ),
  github: (
    <svg
      className='icon-github'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Github icon</title>
      <path d='M12 1.49986C6.20156 1.49986 1.5 6.3233 1.5 12.267C1.5 17.0249 4.50937 21.0561 8.68125 22.4811C8.73976 22.4938 8.79949 22.5001 8.85937 22.4998C9.24843 22.4998 9.39843 22.2139 9.39843 21.9655C9.39843 21.7077 9.38906 21.0327 9.38437 20.1327C9.03705 20.2141 8.68173 20.2565 8.325 20.2592C6.30469 20.2592 5.84531 18.6889 5.84531 18.6889C5.36719 17.4467 4.67812 17.1139 4.67812 17.1139C3.76406 16.4717 4.67344 16.453 4.74375 16.453H4.74844C5.80312 16.5467 6.35625 17.5686 6.35625 17.5686C6.88125 18.4874 7.58437 18.7452 8.2125 18.7452C8.62783 18.7369 9.03673 18.641 9.4125 18.4639C9.50625 17.7702 9.77812 17.2967 10.0781 17.0249C7.74843 16.753 5.29687 15.8295 5.29687 11.7045C5.29687 10.528 5.70469 9.56704 6.375 8.81705C6.26718 8.54517 5.90625 7.4483 6.47812 5.96705C6.55483 5.94869 6.63367 5.94081 6.7125 5.94361C7.09218 5.94361 7.95 6.08892 9.36562 7.0733C11.0857 6.59204 12.9049 6.59204 14.625 7.0733C16.0406 6.08892 16.8984 5.94361 17.2781 5.94361C17.3569 5.94081 17.4358 5.94869 17.5125 5.96705C18.0844 7.4483 17.7234 8.54517 17.6156 8.81705C18.2859 9.57173 18.6937 10.5327 18.6937 11.7045C18.6937 15.8389 16.2375 16.7483 13.8984 17.0155C14.2734 17.3483 14.6109 18.0045 14.6109 19.0077C14.6109 20.4467 14.5969 21.6092 14.5969 21.9608C14.5969 22.2139 14.7422 22.4998 15.1312 22.4998C15.1942 22.5001 15.2571 22.4938 15.3187 22.4811C19.4953 21.0561 22.5 17.0202 22.5 12.267C22.5 6.3233 17.7984 1.49986 12 1.49986Z' />
    </svg>
  ),
  instagram: (
    <svg
      className='icon-instagram'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Instagram icon</title>
      <path d='M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z' />
    </svg>
  ),
  linkedin: (
    <svg
      className='icon-linkedin'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>LinkedIn icon</title>
      <path d='M20.8205 1.50066H3.29437C2.33672 1.50066 1.5 2.18972 1.5 3.13612V20.7011C1.5 21.6527 2.33672 22.5006 3.29437 22.5006H20.8153C21.7781 22.5006 22.5 21.6471 22.5 20.7011V3.13612C22.5056 2.18972 21.7781 1.50066 20.8205 1.50066ZM8.00953 19.0052H5.00109V9.65128H8.00953V19.0052ZM6.60937 8.22909H6.58781C5.625 8.22909 5.00156 7.51237 5.00156 6.61518C5.00156 5.70159 5.6414 5.00175 6.62578 5.00175C7.61015 5.00175 8.2125 5.69643 8.23406 6.61518C8.23359 7.51237 7.61015 8.22909 6.60937 8.22909ZM19.0045 19.0052H15.9961V13.8906C15.9961 12.6653 15.5583 11.8282 14.4698 11.8282C13.6383 11.8282 13.1461 12.3907 12.9272 12.9386C12.8451 13.1355 12.8231 13.4036 12.8231 13.6774V19.0052H9.81468V9.65128H12.8231V10.953C13.2609 10.3296 13.9448 9.43237 15.5362 9.43237C17.5111 9.43237 19.005 10.7341 19.005 13.5405L19.0045 19.0052Z' />
    </svg>
  ),
  menu: (
    <svg
      className='icon-menu'
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Menu icon</title>
      <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z' />
    </svg>
  ),
  person: (
    <svg
      className='icon-person'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Person icon</title>
      <path d='M23.9997 5.49776C19.6149 5.49776 16.414 8.84524 16.7471 13.4252L15.7497 13.4978L16.7471 13.4252C17.0806 18.0062 20.5337 21.4978 23.9997 21.4978C27.4647 21.4978 30.9127 18.0062 31.2524 13.4239C31.5852 8.93234 28.3782 5.49776 23.9997 5.49776ZM14.7524 13.5703C14.3354 7.83777 18.4471 3.49776 23.9997 3.49776C29.5587 3.49776 33.6643 7.93817 33.247 13.5716L33.247 13.5717C32.8517 18.9024 28.7847 23.4978 23.9997 23.4978C19.2158 23.4978 15.1407 18.9044 14.7524 13.5704L14.7524 13.5703ZM5.04924 41.3158C6.69814 32.1731 15.5594 27.4995 23.9996 27.4995C32.4398 27.4995 41.301 32.1731 42.9509 41.3157L42.9509 41.3157C43.0841 42.0541 42.9517 42.8291 42.5297 43.4453C42.0924 44.084 41.3743 44.4995 40.4996 44.4995H7.49961C6.62502 44.4995 5.90727 44.0837 5.47017 43.4451C5.04845 42.829 4.91605 42.0541 5.04924 41.3158ZM23.9996 29.4995C16.1273 29.4995 8.43232 33.8259 7.01748 41.6708L7.01747 41.6708C6.96598 41.9562 7.03093 42.1845 7.12061 42.3155C7.19491 42.4241 7.30263 42.4995 7.49961 42.4995H40.4996C40.6974 42.4995 40.8053 42.4238 40.8795 42.3153C40.9692 42.1844 41.0342 41.9562 40.9827 41.6708C39.5669 33.8259 31.8719 29.4995 23.9996 29.4995Z' />
    </svg>
  ),
  photos: (
    <svg
      className='icon-photos'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Photos icon</title>
      <path d='M3.99783 2.25001L4.00001 2.25L17.3356 2.25C18.0637 2.25212 18.7614 2.5423 19.2763 3.05716C19.7911 3.57202 20.0813 4.26972 20.0834 4.99784L20.0834 5.00001L20.0834 5.58231C21.556 5.58231 22.75 6.77604 22.75 8.24857V18.4161C22.75 19.8887 21.5563 21.0824 20.0837 21.0824H12.4081C12.3924 21.0829 12.3767 21.0829 12.361 21.0824H7.2495C5.77718 21.0824 4.58358 19.889 4.58324 18.4168H4.00001L3.99783 18.4167C3.26971 18.4146 2.57202 18.1245 2.05716 17.6096C1.5423 17.0947 1.25212 16.397 1.25 15.6689L1.25 15.6667V4.99784C1.25211 4.26972 1.5423 3.57202 2.05716 3.05716C2.57202 2.5423 3.26971 2.25212 3.99783 2.25001ZM6.08324 17.4893V18.4161C6.08324 19.0602 6.6054 19.5824 7.2495 19.5824H12.0758L14.8496 16.8287L11.4312 13.4401C11.431 13.44 11.4313 13.4403 11.4312 13.4401C11.3342 13.3445 11.2041 13.2887 11.068 13.2848C10.9316 13.2809 10.7988 13.3289 10.6964 13.4191L6.08324 17.4893ZM15.9141 15.7719L16.7974 14.8951L16.7991 14.8933C17.1585 14.5389 17.6365 14.3301 18.1408 14.3074C18.645 14.2846 19.1399 14.4495 19.5297 14.7702L19.5314 14.7715L21.25 16.1934V8.24857C21.25 7.60446 20.7278 7.08231 20.0837 7.08231H7.2495C6.6054 7.08231 6.08324 7.60446 6.08324 8.24857V15.4889L9.70457 12.2938C10.092 11.9526 10.5949 11.7707 11.111 11.7855C11.627 11.8003 12.1182 12.0103 12.4854 12.3731L12.4863 12.374L15.9141 15.7719ZM4.58324 16.9168V8.24857C4.58324 6.77604 5.77697 5.58231 7.2495 5.58231H18.5834V5.00106C18.5822 4.66966 18.45 4.35218 18.2156 4.11782C17.9812 3.88343 17.6637 3.75122 17.3322 3.75H4.00123C3.66977 3.75122 3.35222 3.88343 3.11782 4.11782C2.88342 4.35222 2.75122 4.66977 2.75 5.00123V15.6655C2.75122 15.997 2.88342 16.3145 3.11782 16.5489C3.35217 16.7833 3.66966 16.9155 4.00105 16.9168H4.58324ZM21.25 18.1403L18.5769 15.9286C18.5767 15.9285 18.577 15.9288 18.5769 15.9286C18.4735 15.8438 18.3419 15.7998 18.2084 15.8059C18.0749 15.8119 17.9483 15.867 17.8531 15.9607C17.8529 15.9609 17.8533 15.9604 17.8531 15.9607L14.2049 19.5824H20.0837C20.7278 19.5824 21.25 19.0602 21.25 18.4161V18.1403ZM16.8717 9.62843C16.5727 9.62843 16.3396 9.86761 16.3396 10.1514C16.3396 10.4351 16.5727 10.6743 16.8717 10.6743C17.1706 10.6743 17.4038 10.4351 17.4038 10.1514C17.4038 9.86761 17.1706 9.62843 16.8717 9.62843ZM14.8396 10.1514C14.8396 9.02906 15.7545 8.12843 16.8717 8.12843C17.9889 8.12843 18.9038 9.02906 18.9038 10.1514C18.9038 11.2736 17.9889 12.1743 16.8717 12.1743C15.7545 12.1743 14.8396 11.2736 14.8396 10.1514Z' />
    </svg>
  ),
  projects: (
    <svg
      className='icon-projects'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Projects icon</title>
      <path
        d='M23.9998 24.0009C23.9998 24.0009 19.4998 15.0009 12.1873 15.0009C7.11357 15.0009 2.99982 19.0321 2.99982 24.0009C2.99982 28.9696 7.11357 33.0009 12.1873 33.0009C15.7039 33.0009 18.8436 30.8999 20.9998 28.5009'
        strokeWidth='2'
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <path
        d='M23.9997 24.0009C23.9997 24.0009 28.4997 33.0009 35.8122 33.0009C40.8859 33.0009 44.9997 28.9696 44.9997 24.0009C44.9997 19.0321 40.8859 15.0009 35.8122 15.0009C32.2956 15.0009 29.1559 17.1018 26.9997 19.5009'
        strokeWidth='2'
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </svg>
  ),
  quote: (
    <svg
      className='icon-quote'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Quote icon</title>
      <path d='M21.5 21.762V39.3221H4V21.5112C4 9.46999 15.25 7.96484 15.25 7.96484L16.75 11.4769C16.75 11.4769 11.75 12.2294 10.75 16.2432C9.75 19.2534 11.75 21.762 11.75 21.762H21.5Z' />
      <path d='M44 21.762V39.3221H26.5V21.5112C26.5 9.46999 37.75 7.96484 37.75 7.96484L39.25 11.4769C39.25 11.4769 34.25 12.2294 33.25 16.2432C32.25 19.2534 34.25 21.762 34.25 21.762H44Z' />
    </svg>
  ),
  twitter: (
    <svg
      className='icon-twitter'
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Twitter icon</title>
      <path d='M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z' />
    </svg>
  ),
  weibo: (
    <svg
      className='icon-weibo'
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Weibo icon</title>
      <path d='m457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109s-68.4-42.3-106-34.3c-15.4 3.3-25.2 18.4-21.9 33.8 3.3 15.3 18.4 25.2 33.8 21.8 18.4-3.9 38.3 1.8 51.9 16.7 13.5 15 17.2 35.4 11.3 53.3-4.9 15.1 3.2 31.1 18.2 36z' />
      <path d='m885.1 237.5c-56.7-62.9-140.4-86.9-217.7-70.5-17.9 3.8-29.3 21.4-25.4 39.3 3.8 17.9 21.4 29.3 39.3 25.5 55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zm-156.1 261.5c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6-81.4 81.5-128.7 167.9-128.7 242.6 0 142.9 183.2 229.8 362.5 229.8 235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zm-286 311.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4 9.2 93.9-99.2 181.5-242.2 195.7z' />
    </svg>
  ),
};

export default icons;
