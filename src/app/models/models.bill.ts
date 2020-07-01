export class Bill{
    constructor(
        public fecha?: string,
        public producto?: string,
        public precio?: string,
        public cantidad?: string,
        public total?: string,
        public subtotal?: string,
        public precioTotal?: string,
        public user_id?: number
    ) { }
}