
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Siswa
 * 
 */
export type Siswa = $Result.DefaultSelection<Prisma.$SiswaPayload>
/**
 * Model Guru
 * 
 */
export type Guru = $Result.DefaultSelection<Prisma.$GuruPayload>
/**
 * Model Absensi
 * 
 */
export type Absensi = $Result.DefaultSelection<Prisma.$AbsensiPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  GURU: 'GURU',
  SISWA: 'SISWA'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  HADIR: 'HADIR',
  SAKIT: 'SAKIT',
  IZIN: 'IZIN',
  ALFA: 'ALFA'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siswa`: Exposes CRUD operations for the **Siswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Siswas
    * const siswas = await prisma.siswa.findMany()
    * ```
    */
  get siswa(): Prisma.SiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guru`: Exposes CRUD operations for the **Guru** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gurus
    * const gurus = await prisma.guru.findMany()
    * ```
    */
  get guru(): Prisma.GuruDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.absensi`: Exposes CRUD operations for the **Absensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Absensis
    * const absensis = await prisma.absensi.findMany()
    * ```
    */
  get absensi(): Prisma.AbsensiDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Siswa: 'Siswa',
    Guru: 'Guru',
    Absensi: 'Absensi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "siswa" | "guru" | "absensi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Siswa: {
        payload: Prisma.$SiswaPayload<ExtArgs>
        fields: Prisma.SiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          findFirst: {
            args: Prisma.SiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          findMany: {
            args: Prisma.SiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>[]
          }
          create: {
            args: Prisma.SiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          createMany: {
            args: Prisma.SiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          update: {
            args: Prisma.SiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          deleteMany: {
            args: Prisma.SiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          aggregate: {
            args: Prisma.SiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiswa>
          }
          groupBy: {
            args: Prisma.SiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiswaCountArgs<ExtArgs>
            result: $Utils.Optional<SiswaCountAggregateOutputType> | number
          }
        }
      }
      Guru: {
        payload: Prisma.$GuruPayload<ExtArgs>
        fields: Prisma.GuruFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuruFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuruFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          findFirst: {
            args: Prisma.GuruFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuruFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          findMany: {
            args: Prisma.GuruFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>[]
          }
          create: {
            args: Prisma.GuruCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          createMany: {
            args: Prisma.GuruCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GuruDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          update: {
            args: Prisma.GuruUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          deleteMany: {
            args: Prisma.GuruDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuruUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuruUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          aggregate: {
            args: Prisma.GuruAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuru>
          }
          groupBy: {
            args: Prisma.GuruGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuruGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuruCountArgs<ExtArgs>
            result: $Utils.Optional<GuruCountAggregateOutputType> | number
          }
        }
      }
      Absensi: {
        payload: Prisma.$AbsensiPayload<ExtArgs>
        fields: Prisma.AbsensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbsensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbsensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findFirst: {
            args: Prisma.AbsensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbsensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findMany: {
            args: Prisma.AbsensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          create: {
            args: Prisma.AbsensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          createMany: {
            args: Prisma.AbsensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AbsensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          update: {
            args: Prisma.AbsensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          deleteMany: {
            args: Prisma.AbsensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbsensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AbsensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          aggregate: {
            args: Prisma.AbsensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsensi>
          }
          groupBy: {
            args: Prisma.AbsensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbsensiCountArgs<ExtArgs>
            result: $Utils.Optional<AbsensiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    siswa?: SiswaOmit
    guru?: GuruOmit
    absensi?: AbsensiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SiswaCountOutputType
   */

  export type SiswaCountOutputType = {
    absensi: number
  }

  export type SiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absensi?: boolean | SiswaCountOutputTypeCountAbsensiArgs
  }

  // Custom InputTypes
  /**
   * SiswaCountOutputType without action
   */
  export type SiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiswaCountOutputType
     */
    select?: SiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiswaCountOutputType without action
   */
  export type SiswaCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }


  /**
   * Count Type GuruCountOutputType
   */

  export type GuruCountOutputType = {
    absensi: number
  }

  export type GuruCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absensi?: boolean | GuruCountOutputTypeCountAbsensiArgs
  }

  // Custom InputTypes
  /**
   * GuruCountOutputType without action
   */
  export type GuruCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruCountOutputType
     */
    select?: GuruCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuruCountOutputType without action
   */
  export type GuruCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siswa?: boolean | User$siswaArgs<ExtArgs>
    guru?: boolean | User$guruArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | User$siswaArgs<ExtArgs>
    guru?: boolean | User$guruArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      siswa: Prisma.$SiswaPayload<ExtArgs> | null
      guru: Prisma.$GuruPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    siswa<T extends User$siswaArgs<ExtArgs> = {}>(args?: Subset<T, User$siswaArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    guru<T extends User$guruArgs<ExtArgs> = {}>(args?: Subset<T, User$guruArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nama: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.siswa
   */
  export type User$siswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    where?: SiswaWhereInput
  }

  /**
   * User.guru
   */
  export type User$guruArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    where?: GuruWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Siswa
   */

  export type AggregateSiswa = {
    _count: SiswaCountAggregateOutputType | null
    _avg: SiswaAvgAggregateOutputType | null
    _sum: SiswaSumAggregateOutputType | null
    _min: SiswaMinAggregateOutputType | null
    _max: SiswaMaxAggregateOutputType | null
  }

  export type SiswaAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SiswaSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SiswaMinAggregateOutputType = {
    id: number | null
    userId: number | null
    nisn: string | null
    kelas: string | null
    jurusan: string | null
  }

  export type SiswaMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    nisn: string | null
    kelas: string | null
    jurusan: string | null
  }

  export type SiswaCountAggregateOutputType = {
    id: number
    userId: number
    nisn: number
    kelas: number
    jurusan: number
    _all: number
  }


  export type SiswaAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SiswaSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SiswaMinAggregateInputType = {
    id?: true
    userId?: true
    nisn?: true
    kelas?: true
    jurusan?: true
  }

  export type SiswaMaxAggregateInputType = {
    id?: true
    userId?: true
    nisn?: true
    kelas?: true
    jurusan?: true
  }

  export type SiswaCountAggregateInputType = {
    id?: true
    userId?: true
    nisn?: true
    kelas?: true
    jurusan?: true
    _all?: true
  }

  export type SiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Siswa to aggregate.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Siswas
    **/
    _count?: true | SiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiswaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiswaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiswaMaxAggregateInputType
  }

  export type GetSiswaAggregateType<T extends SiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateSiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiswa[P]>
      : GetScalarType<T[P], AggregateSiswa[P]>
  }




  export type SiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiswaWhereInput
    orderBy?: SiswaOrderByWithAggregationInput | SiswaOrderByWithAggregationInput[]
    by: SiswaScalarFieldEnum[] | SiswaScalarFieldEnum
    having?: SiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiswaCountAggregateInputType | true
    _avg?: SiswaAvgAggregateInputType
    _sum?: SiswaSumAggregateInputType
    _min?: SiswaMinAggregateInputType
    _max?: SiswaMaxAggregateInputType
  }

  export type SiswaGroupByOutputType = {
    id: number
    userId: number
    nisn: string
    kelas: string
    jurusan: string
    _count: SiswaCountAggregateOutputType | null
    _avg: SiswaAvgAggregateOutputType | null
    _sum: SiswaSumAggregateOutputType | null
    _min: SiswaMinAggregateOutputType | null
    _max: SiswaMaxAggregateOutputType | null
  }

  type GetSiswaGroupByPayload<T extends SiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiswaGroupByOutputType[P]>
            : GetScalarType<T[P], SiswaGroupByOutputType[P]>
        }
      >
    >


  export type SiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nisn?: boolean
    kelas?: boolean
    jurusan?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    absensi?: boolean | Siswa$absensiArgs<ExtArgs>
    _count?: boolean | SiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siswa"]>



  export type SiswaSelectScalar = {
    id?: boolean
    userId?: boolean
    nisn?: boolean
    kelas?: boolean
    jurusan?: boolean
  }

  export type SiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nisn" | "kelas" | "jurusan", ExtArgs["result"]["siswa"]>
  export type SiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    absensi?: boolean | Siswa$absensiArgs<ExtArgs>
    _count?: boolean | SiswaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Siswa"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      absensi: Prisma.$AbsensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      nisn: string
      kelas: string
      jurusan: string
    }, ExtArgs["result"]["siswa"]>
    composites: {}
  }

  type SiswaGetPayload<S extends boolean | null | undefined | SiswaDefaultArgs> = $Result.GetResult<Prisma.$SiswaPayload, S>

  type SiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiswaCountAggregateInputType | true
    }

  export interface SiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Siswa'], meta: { name: 'Siswa' } }
    /**
     * Find zero or one Siswa that matches the filter.
     * @param {SiswaFindUniqueArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiswaFindUniqueArgs>(args: SelectSubset<T, SiswaFindUniqueArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Siswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiswaFindUniqueOrThrowArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, SiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Siswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaFindFirstArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiswaFindFirstArgs>(args?: SelectSubset<T, SiswaFindFirstArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Siswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaFindFirstOrThrowArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, SiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Siswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Siswas
     * const siswas = await prisma.siswa.findMany()
     * 
     * // Get first 10 Siswas
     * const siswas = await prisma.siswa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siswaWithIdOnly = await prisma.siswa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiswaFindManyArgs>(args?: SelectSubset<T, SiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Siswa.
     * @param {SiswaCreateArgs} args - Arguments to create a Siswa.
     * @example
     * // Create one Siswa
     * const Siswa = await prisma.siswa.create({
     *   data: {
     *     // ... data to create a Siswa
     *   }
     * })
     * 
     */
    create<T extends SiswaCreateArgs>(args: SelectSubset<T, SiswaCreateArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Siswas.
     * @param {SiswaCreateManyArgs} args - Arguments to create many Siswas.
     * @example
     * // Create many Siswas
     * const siswa = await prisma.siswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiswaCreateManyArgs>(args?: SelectSubset<T, SiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Siswa.
     * @param {SiswaDeleteArgs} args - Arguments to delete one Siswa.
     * @example
     * // Delete one Siswa
     * const Siswa = await prisma.siswa.delete({
     *   where: {
     *     // ... filter to delete one Siswa
     *   }
     * })
     * 
     */
    delete<T extends SiswaDeleteArgs>(args: SelectSubset<T, SiswaDeleteArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Siswa.
     * @param {SiswaUpdateArgs} args - Arguments to update one Siswa.
     * @example
     * // Update one Siswa
     * const siswa = await prisma.siswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiswaUpdateArgs>(args: SelectSubset<T, SiswaUpdateArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Siswas.
     * @param {SiswaDeleteManyArgs} args - Arguments to filter Siswas to delete.
     * @example
     * // Delete a few Siswas
     * const { count } = await prisma.siswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiswaDeleteManyArgs>(args?: SelectSubset<T, SiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Siswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Siswas
     * const siswa = await prisma.siswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiswaUpdateManyArgs>(args: SelectSubset<T, SiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Siswa.
     * @param {SiswaUpsertArgs} args - Arguments to update or create a Siswa.
     * @example
     * // Update or create a Siswa
     * const siswa = await prisma.siswa.upsert({
     *   create: {
     *     // ... data to create a Siswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Siswa we want to update
     *   }
     * })
     */
    upsert<T extends SiswaUpsertArgs>(args: SelectSubset<T, SiswaUpsertArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Siswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaCountArgs} args - Arguments to filter Siswas to count.
     * @example
     * // Count the number of Siswas
     * const count = await prisma.siswa.count({
     *   where: {
     *     // ... the filter for the Siswas we want to count
     *   }
     * })
    **/
    count<T extends SiswaCountArgs>(
      args?: Subset<T, SiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Siswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiswaAggregateArgs>(args: Subset<T, SiswaAggregateArgs>): Prisma.PrismaPromise<GetSiswaAggregateType<T>>

    /**
     * Group by Siswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiswaGroupByArgs['orderBy'] }
        : { orderBy?: SiswaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Siswa model
   */
  readonly fields: SiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Siswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    absensi<T extends Siswa$absensiArgs<ExtArgs> = {}>(args?: Subset<T, Siswa$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Siswa model
   */
  interface SiswaFieldRefs {
    readonly id: FieldRef<"Siswa", 'Int'>
    readonly userId: FieldRef<"Siswa", 'Int'>
    readonly nisn: FieldRef<"Siswa", 'String'>
    readonly kelas: FieldRef<"Siswa", 'String'>
    readonly jurusan: FieldRef<"Siswa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Siswa findUnique
   */
  export type SiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa findUniqueOrThrow
   */
  export type SiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa findFirst
   */
  export type SiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Siswas.
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Siswas.
     */
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * Siswa findFirstOrThrow
   */
  export type SiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Siswas.
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Siswas.
     */
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * Siswa findMany
   */
  export type SiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswas to fetch.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Siswas.
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * Siswa create
   */
  export type SiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a Siswa.
     */
    data: XOR<SiswaCreateInput, SiswaUncheckedCreateInput>
  }

  /**
   * Siswa createMany
   */
  export type SiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Siswas.
     */
    data: SiswaCreateManyInput | SiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Siswa update
   */
  export type SiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a Siswa.
     */
    data: XOR<SiswaUpdateInput, SiswaUncheckedUpdateInput>
    /**
     * Choose, which Siswa to update.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa updateMany
   */
  export type SiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Siswas.
     */
    data: XOR<SiswaUpdateManyMutationInput, SiswaUncheckedUpdateManyInput>
    /**
     * Filter which Siswas to update
     */
    where?: SiswaWhereInput
    /**
     * Limit how many Siswas to update.
     */
    limit?: number
  }

  /**
   * Siswa upsert
   */
  export type SiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the Siswa to update in case it exists.
     */
    where: SiswaWhereUniqueInput
    /**
     * In case the Siswa found by the `where` argument doesn't exist, create a new Siswa with this data.
     */
    create: XOR<SiswaCreateInput, SiswaUncheckedCreateInput>
    /**
     * In case the Siswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiswaUpdateInput, SiswaUncheckedUpdateInput>
  }

  /**
   * Siswa delete
   */
  export type SiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter which Siswa to delete.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa deleteMany
   */
  export type SiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Siswas to delete
     */
    where?: SiswaWhereInput
    /**
     * Limit how many Siswas to delete.
     */
    limit?: number
  }

  /**
   * Siswa.absensi
   */
  export type Siswa$absensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Siswa without action
   */
  export type SiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
  }


  /**
   * Model Guru
   */

  export type AggregateGuru = {
    _count: GuruCountAggregateOutputType | null
    _avg: GuruAvgAggregateOutputType | null
    _sum: GuruSumAggregateOutputType | null
    _min: GuruMinAggregateOutputType | null
    _max: GuruMaxAggregateOutputType | null
  }

  export type GuruAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GuruSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GuruMinAggregateOutputType = {
    id: number | null
    userId: number | null
    nip: string | null
    mapel: string | null
  }

  export type GuruMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    nip: string | null
    mapel: string | null
  }

  export type GuruCountAggregateOutputType = {
    id: number
    userId: number
    nip: number
    mapel: number
    _all: number
  }


  export type GuruAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GuruSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GuruMinAggregateInputType = {
    id?: true
    userId?: true
    nip?: true
    mapel?: true
  }

  export type GuruMaxAggregateInputType = {
    id?: true
    userId?: true
    nip?: true
    mapel?: true
  }

  export type GuruCountAggregateInputType = {
    id?: true
    userId?: true
    nip?: true
    mapel?: true
    _all?: true
  }

  export type GuruAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guru to aggregate.
     */
    where?: GuruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gurus to fetch.
     */
    orderBy?: GuruOrderByWithRelationInput | GuruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gurus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gurus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gurus
    **/
    _count?: true | GuruCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuruAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuruSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuruMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuruMaxAggregateInputType
  }

  export type GetGuruAggregateType<T extends GuruAggregateArgs> = {
        [P in keyof T & keyof AggregateGuru]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuru[P]>
      : GetScalarType<T[P], AggregateGuru[P]>
  }




  export type GuruGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuruWhereInput
    orderBy?: GuruOrderByWithAggregationInput | GuruOrderByWithAggregationInput[]
    by: GuruScalarFieldEnum[] | GuruScalarFieldEnum
    having?: GuruScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuruCountAggregateInputType | true
    _avg?: GuruAvgAggregateInputType
    _sum?: GuruSumAggregateInputType
    _min?: GuruMinAggregateInputType
    _max?: GuruMaxAggregateInputType
  }

  export type GuruGroupByOutputType = {
    id: number
    userId: number
    nip: string
    mapel: string
    _count: GuruCountAggregateOutputType | null
    _avg: GuruAvgAggregateOutputType | null
    _sum: GuruSumAggregateOutputType | null
    _min: GuruMinAggregateOutputType | null
    _max: GuruMaxAggregateOutputType | null
  }

  type GetGuruGroupByPayload<T extends GuruGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuruGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuruGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuruGroupByOutputType[P]>
            : GetScalarType<T[P], GuruGroupByOutputType[P]>
        }
      >
    >


  export type GuruSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nip?: boolean
    mapel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    absensi?: boolean | Guru$absensiArgs<ExtArgs>
    _count?: boolean | GuruCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guru"]>



  export type GuruSelectScalar = {
    id?: boolean
    userId?: boolean
    nip?: boolean
    mapel?: boolean
  }

  export type GuruOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nip" | "mapel", ExtArgs["result"]["guru"]>
  export type GuruInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    absensi?: boolean | Guru$absensiArgs<ExtArgs>
    _count?: boolean | GuruCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GuruPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guru"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      absensi: Prisma.$AbsensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      nip: string
      mapel: string
    }, ExtArgs["result"]["guru"]>
    composites: {}
  }

  type GuruGetPayload<S extends boolean | null | undefined | GuruDefaultArgs> = $Result.GetResult<Prisma.$GuruPayload, S>

  type GuruCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuruFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuruCountAggregateInputType | true
    }

  export interface GuruDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guru'], meta: { name: 'Guru' } }
    /**
     * Find zero or one Guru that matches the filter.
     * @param {GuruFindUniqueArgs} args - Arguments to find a Guru
     * @example
     * // Get one Guru
     * const guru = await prisma.guru.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuruFindUniqueArgs>(args: SelectSubset<T, GuruFindUniqueArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guru that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuruFindUniqueOrThrowArgs} args - Arguments to find a Guru
     * @example
     * // Get one Guru
     * const guru = await prisma.guru.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuruFindUniqueOrThrowArgs>(args: SelectSubset<T, GuruFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guru that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruFindFirstArgs} args - Arguments to find a Guru
     * @example
     * // Get one Guru
     * const guru = await prisma.guru.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuruFindFirstArgs>(args?: SelectSubset<T, GuruFindFirstArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guru that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruFindFirstOrThrowArgs} args - Arguments to find a Guru
     * @example
     * // Get one Guru
     * const guru = await prisma.guru.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuruFindFirstOrThrowArgs>(args?: SelectSubset<T, GuruFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gurus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gurus
     * const gurus = await prisma.guru.findMany()
     * 
     * // Get first 10 Gurus
     * const gurus = await prisma.guru.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guruWithIdOnly = await prisma.guru.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuruFindManyArgs>(args?: SelectSubset<T, GuruFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guru.
     * @param {GuruCreateArgs} args - Arguments to create a Guru.
     * @example
     * // Create one Guru
     * const Guru = await prisma.guru.create({
     *   data: {
     *     // ... data to create a Guru
     *   }
     * })
     * 
     */
    create<T extends GuruCreateArgs>(args: SelectSubset<T, GuruCreateArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gurus.
     * @param {GuruCreateManyArgs} args - Arguments to create many Gurus.
     * @example
     * // Create many Gurus
     * const guru = await prisma.guru.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuruCreateManyArgs>(args?: SelectSubset<T, GuruCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Guru.
     * @param {GuruDeleteArgs} args - Arguments to delete one Guru.
     * @example
     * // Delete one Guru
     * const Guru = await prisma.guru.delete({
     *   where: {
     *     // ... filter to delete one Guru
     *   }
     * })
     * 
     */
    delete<T extends GuruDeleteArgs>(args: SelectSubset<T, GuruDeleteArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guru.
     * @param {GuruUpdateArgs} args - Arguments to update one Guru.
     * @example
     * // Update one Guru
     * const guru = await prisma.guru.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuruUpdateArgs>(args: SelectSubset<T, GuruUpdateArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gurus.
     * @param {GuruDeleteManyArgs} args - Arguments to filter Gurus to delete.
     * @example
     * // Delete a few Gurus
     * const { count } = await prisma.guru.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuruDeleteManyArgs>(args?: SelectSubset<T, GuruDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gurus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gurus
     * const guru = await prisma.guru.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuruUpdateManyArgs>(args: SelectSubset<T, GuruUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Guru.
     * @param {GuruUpsertArgs} args - Arguments to update or create a Guru.
     * @example
     * // Update or create a Guru
     * const guru = await prisma.guru.upsert({
     *   create: {
     *     // ... data to create a Guru
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guru we want to update
     *   }
     * })
     */
    upsert<T extends GuruUpsertArgs>(args: SelectSubset<T, GuruUpsertArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gurus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruCountArgs} args - Arguments to filter Gurus to count.
     * @example
     * // Count the number of Gurus
     * const count = await prisma.guru.count({
     *   where: {
     *     // ... the filter for the Gurus we want to count
     *   }
     * })
    **/
    count<T extends GuruCountArgs>(
      args?: Subset<T, GuruCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuruCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guru.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuruAggregateArgs>(args: Subset<T, GuruAggregateArgs>): Prisma.PrismaPromise<GetGuruAggregateType<T>>

    /**
     * Group by Guru.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuruGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuruGroupByArgs['orderBy'] }
        : { orderBy?: GuruGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuruGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuruGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guru model
   */
  readonly fields: GuruFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guru.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuruClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    absensi<T extends Guru$absensiArgs<ExtArgs> = {}>(args?: Subset<T, Guru$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guru model
   */
  interface GuruFieldRefs {
    readonly id: FieldRef<"Guru", 'Int'>
    readonly userId: FieldRef<"Guru", 'Int'>
    readonly nip: FieldRef<"Guru", 'String'>
    readonly mapel: FieldRef<"Guru", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Guru findUnique
   */
  export type GuruFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter, which Guru to fetch.
     */
    where: GuruWhereUniqueInput
  }

  /**
   * Guru findUniqueOrThrow
   */
  export type GuruFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter, which Guru to fetch.
     */
    where: GuruWhereUniqueInput
  }

  /**
   * Guru findFirst
   */
  export type GuruFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter, which Guru to fetch.
     */
    where?: GuruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gurus to fetch.
     */
    orderBy?: GuruOrderByWithRelationInput | GuruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gurus.
     */
    cursor?: GuruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gurus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gurus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gurus.
     */
    distinct?: GuruScalarFieldEnum | GuruScalarFieldEnum[]
  }

  /**
   * Guru findFirstOrThrow
   */
  export type GuruFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter, which Guru to fetch.
     */
    where?: GuruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gurus to fetch.
     */
    orderBy?: GuruOrderByWithRelationInput | GuruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gurus.
     */
    cursor?: GuruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gurus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gurus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gurus.
     */
    distinct?: GuruScalarFieldEnum | GuruScalarFieldEnum[]
  }

  /**
   * Guru findMany
   */
  export type GuruFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter, which Gurus to fetch.
     */
    where?: GuruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gurus to fetch.
     */
    orderBy?: GuruOrderByWithRelationInput | GuruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gurus.
     */
    cursor?: GuruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gurus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gurus.
     */
    skip?: number
    distinct?: GuruScalarFieldEnum | GuruScalarFieldEnum[]
  }

  /**
   * Guru create
   */
  export type GuruCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * The data needed to create a Guru.
     */
    data: XOR<GuruCreateInput, GuruUncheckedCreateInput>
  }

  /**
   * Guru createMany
   */
  export type GuruCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gurus.
     */
    data: GuruCreateManyInput | GuruCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guru update
   */
  export type GuruUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * The data needed to update a Guru.
     */
    data: XOR<GuruUpdateInput, GuruUncheckedUpdateInput>
    /**
     * Choose, which Guru to update.
     */
    where: GuruWhereUniqueInput
  }

  /**
   * Guru updateMany
   */
  export type GuruUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gurus.
     */
    data: XOR<GuruUpdateManyMutationInput, GuruUncheckedUpdateManyInput>
    /**
     * Filter which Gurus to update
     */
    where?: GuruWhereInput
    /**
     * Limit how many Gurus to update.
     */
    limit?: number
  }

  /**
   * Guru upsert
   */
  export type GuruUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * The filter to search for the Guru to update in case it exists.
     */
    where: GuruWhereUniqueInput
    /**
     * In case the Guru found by the `where` argument doesn't exist, create a new Guru with this data.
     */
    create: XOR<GuruCreateInput, GuruUncheckedCreateInput>
    /**
     * In case the Guru was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuruUpdateInput, GuruUncheckedUpdateInput>
  }

  /**
   * Guru delete
   */
  export type GuruDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter which Guru to delete.
     */
    where: GuruWhereUniqueInput
  }

  /**
   * Guru deleteMany
   */
  export type GuruDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gurus to delete
     */
    where?: GuruWhereInput
    /**
     * Limit how many Gurus to delete.
     */
    limit?: number
  }

  /**
   * Guru.absensi
   */
  export type Guru$absensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Guru without action
   */
  export type GuruDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
  }


  /**
   * Model Absensi
   */

  export type AggregateAbsensi = {
    _count: AbsensiCountAggregateOutputType | null
    _avg: AbsensiAvgAggregateOutputType | null
    _sum: AbsensiSumAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  export type AbsensiAvgAggregateOutputType = {
    id: number | null
    siswaId: number | null
    guruId: number | null
  }

  export type AbsensiSumAggregateOutputType = {
    id: number | null
    siswaId: number | null
    guruId: number | null
  }

  export type AbsensiMinAggregateOutputType = {
    id: number | null
    siswaId: number | null
    guruId: number | null
    tanggal: Date | null
    status: $Enums.Status | null
    keterangan: string | null
    waktuAbsen: Date | null
  }

  export type AbsensiMaxAggregateOutputType = {
    id: number | null
    siswaId: number | null
    guruId: number | null
    tanggal: Date | null
    status: $Enums.Status | null
    keterangan: string | null
    waktuAbsen: Date | null
  }

  export type AbsensiCountAggregateOutputType = {
    id: number
    siswaId: number
    guruId: number
    tanggal: number
    status: number
    keterangan: number
    waktuAbsen: number
    _all: number
  }


  export type AbsensiAvgAggregateInputType = {
    id?: true
    siswaId?: true
    guruId?: true
  }

  export type AbsensiSumAggregateInputType = {
    id?: true
    siswaId?: true
    guruId?: true
  }

  export type AbsensiMinAggregateInputType = {
    id?: true
    siswaId?: true
    guruId?: true
    tanggal?: true
    status?: true
    keterangan?: true
    waktuAbsen?: true
  }

  export type AbsensiMaxAggregateInputType = {
    id?: true
    siswaId?: true
    guruId?: true
    tanggal?: true
    status?: true
    keterangan?: true
    waktuAbsen?: true
  }

  export type AbsensiCountAggregateInputType = {
    id?: true
    siswaId?: true
    guruId?: true
    tanggal?: true
    status?: true
    keterangan?: true
    waktuAbsen?: true
    _all?: true
  }

  export type AbsensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensi to aggregate.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Absensis
    **/
    _count?: true | AbsensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbsensiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbsensiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsensiMaxAggregateInputType
  }

  export type GetAbsensiAggregateType<T extends AbsensiAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsensi[P]>
      : GetScalarType<T[P], AggregateAbsensi[P]>
  }




  export type AbsensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithAggregationInput | AbsensiOrderByWithAggregationInput[]
    by: AbsensiScalarFieldEnum[] | AbsensiScalarFieldEnum
    having?: AbsensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsensiCountAggregateInputType | true
    _avg?: AbsensiAvgAggregateInputType
    _sum?: AbsensiSumAggregateInputType
    _min?: AbsensiMinAggregateInputType
    _max?: AbsensiMaxAggregateInputType
  }

  export type AbsensiGroupByOutputType = {
    id: number
    siswaId: number
    guruId: number | null
    tanggal: Date
    status: $Enums.Status
    keterangan: string | null
    waktuAbsen: Date
    _count: AbsensiCountAggregateOutputType | null
    _avg: AbsensiAvgAggregateOutputType | null
    _sum: AbsensiSumAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  type GetAbsensiGroupByPayload<T extends AbsensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
            : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
        }
      >
    >


  export type AbsensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siswaId?: boolean
    guruId?: boolean
    tanggal?: boolean
    status?: boolean
    keterangan?: boolean
    waktuAbsen?: boolean
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
    guru?: boolean | Absensi$guruArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>



  export type AbsensiSelectScalar = {
    id?: boolean
    siswaId?: boolean
    guruId?: boolean
    tanggal?: boolean
    status?: boolean
    keterangan?: boolean
    waktuAbsen?: boolean
  }

  export type AbsensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siswaId" | "guruId" | "tanggal" | "status" | "keterangan" | "waktuAbsen", ExtArgs["result"]["absensi"]>
  export type AbsensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
    guru?: boolean | Absensi$guruArgs<ExtArgs>
  }

  export type $AbsensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Absensi"
    objects: {
      siswa: Prisma.$SiswaPayload<ExtArgs>
      guru: Prisma.$GuruPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      siswaId: number
      guruId: number | null
      tanggal: Date
      status: $Enums.Status
      keterangan: string | null
      waktuAbsen: Date
    }, ExtArgs["result"]["absensi"]>
    composites: {}
  }

  type AbsensiGetPayload<S extends boolean | null | undefined | AbsensiDefaultArgs> = $Result.GetResult<Prisma.$AbsensiPayload, S>

  type AbsensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbsensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsensiCountAggregateInputType | true
    }

  export interface AbsensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Absensi'], meta: { name: 'Absensi' } }
    /**
     * Find zero or one Absensi that matches the filter.
     * @param {AbsensiFindUniqueArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbsensiFindUniqueArgs>(args: SelectSubset<T, AbsensiFindUniqueArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Absensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbsensiFindUniqueOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbsensiFindUniqueOrThrowArgs>(args: SelectSubset<T, AbsensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbsensiFindFirstArgs>(args?: SelectSubset<T, AbsensiFindFirstArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbsensiFindFirstOrThrowArgs>(args?: SelectSubset<T, AbsensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Absensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Absensis
     * const absensis = await prisma.absensi.findMany()
     * 
     * // Get first 10 Absensis
     * const absensis = await prisma.absensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absensiWithIdOnly = await prisma.absensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbsensiFindManyArgs>(args?: SelectSubset<T, AbsensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Absensi.
     * @param {AbsensiCreateArgs} args - Arguments to create a Absensi.
     * @example
     * // Create one Absensi
     * const Absensi = await prisma.absensi.create({
     *   data: {
     *     // ... data to create a Absensi
     *   }
     * })
     * 
     */
    create<T extends AbsensiCreateArgs>(args: SelectSubset<T, AbsensiCreateArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Absensis.
     * @param {AbsensiCreateManyArgs} args - Arguments to create many Absensis.
     * @example
     * // Create many Absensis
     * const absensi = await prisma.absensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbsensiCreateManyArgs>(args?: SelectSubset<T, AbsensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Absensi.
     * @param {AbsensiDeleteArgs} args - Arguments to delete one Absensi.
     * @example
     * // Delete one Absensi
     * const Absensi = await prisma.absensi.delete({
     *   where: {
     *     // ... filter to delete one Absensi
     *   }
     * })
     * 
     */
    delete<T extends AbsensiDeleteArgs>(args: SelectSubset<T, AbsensiDeleteArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Absensi.
     * @param {AbsensiUpdateArgs} args - Arguments to update one Absensi.
     * @example
     * // Update one Absensi
     * const absensi = await prisma.absensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbsensiUpdateArgs>(args: SelectSubset<T, AbsensiUpdateArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Absensis.
     * @param {AbsensiDeleteManyArgs} args - Arguments to filter Absensis to delete.
     * @example
     * // Delete a few Absensis
     * const { count } = await prisma.absensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbsensiDeleteManyArgs>(args?: SelectSubset<T, AbsensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Absensis
     * const absensi = await prisma.absensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbsensiUpdateManyArgs>(args: SelectSubset<T, AbsensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Absensi.
     * @param {AbsensiUpsertArgs} args - Arguments to update or create a Absensi.
     * @example
     * // Update or create a Absensi
     * const absensi = await prisma.absensi.upsert({
     *   create: {
     *     // ... data to create a Absensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Absensi we want to update
     *   }
     * })
     */
    upsert<T extends AbsensiUpsertArgs>(args: SelectSubset<T, AbsensiUpsertArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiCountArgs} args - Arguments to filter Absensis to count.
     * @example
     * // Count the number of Absensis
     * const count = await prisma.absensi.count({
     *   where: {
     *     // ... the filter for the Absensis we want to count
     *   }
     * })
    **/
    count<T extends AbsensiCountArgs>(
      args?: Subset<T, AbsensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbsensiAggregateArgs>(args: Subset<T, AbsensiAggregateArgs>): Prisma.PrismaPromise<GetAbsensiAggregateType<T>>

    /**
     * Group by Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbsensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbsensiGroupByArgs['orderBy'] }
        : { orderBy?: AbsensiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbsensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Absensi model
   */
  readonly fields: AbsensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Absensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbsensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    siswa<T extends SiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiswaDefaultArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guru<T extends Absensi$guruArgs<ExtArgs> = {}>(args?: Subset<T, Absensi$guruArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Absensi model
   */
  interface AbsensiFieldRefs {
    readonly id: FieldRef<"Absensi", 'Int'>
    readonly siswaId: FieldRef<"Absensi", 'Int'>
    readonly guruId: FieldRef<"Absensi", 'Int'>
    readonly tanggal: FieldRef<"Absensi", 'DateTime'>
    readonly status: FieldRef<"Absensi", 'Status'>
    readonly keterangan: FieldRef<"Absensi", 'String'>
    readonly waktuAbsen: FieldRef<"Absensi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Absensi findUnique
   */
  export type AbsensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findUniqueOrThrow
   */
  export type AbsensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findFirst
   */
  export type AbsensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findFirstOrThrow
   */
  export type AbsensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findMany
   */
  export type AbsensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensis to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi create
   */
  export type AbsensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to create a Absensi.
     */
    data: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
  }

  /**
   * Absensi createMany
   */
  export type AbsensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Absensis.
     */
    data: AbsensiCreateManyInput | AbsensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Absensi update
   */
  export type AbsensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to update a Absensi.
     */
    data: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
    /**
     * Choose, which Absensi to update.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi updateMany
   */
  export type AbsensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Absensis.
     */
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyInput>
    /**
     * Filter which Absensis to update
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to update.
     */
    limit?: number
  }

  /**
   * Absensi upsert
   */
  export type AbsensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The filter to search for the Absensi to update in case it exists.
     */
    where: AbsensiWhereUniqueInput
    /**
     * In case the Absensi found by the `where` argument doesn't exist, create a new Absensi with this data.
     */
    create: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
    /**
     * In case the Absensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
  }

  /**
   * Absensi delete
   */
  export type AbsensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter which Absensi to delete.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi deleteMany
   */
  export type AbsensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensis to delete
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to delete.
     */
    limit?: number
  }

  /**
   * Absensi.guru
   */
  export type Absensi$guruArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    where?: GuruWhereInput
  }

  /**
   * Absensi without action
   */
  export type AbsensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SiswaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nisn: 'nisn',
    kelas: 'kelas',
    jurusan: 'jurusan'
  };

  export type SiswaScalarFieldEnum = (typeof SiswaScalarFieldEnum)[keyof typeof SiswaScalarFieldEnum]


  export const GuruScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nip: 'nip',
    mapel: 'mapel'
  };

  export type GuruScalarFieldEnum = (typeof GuruScalarFieldEnum)[keyof typeof GuruScalarFieldEnum]


  export const AbsensiScalarFieldEnum: {
    id: 'id',
    siswaId: 'siswaId',
    guruId: 'guruId',
    tanggal: 'tanggal',
    status: 'status',
    keterangan: 'keterangan',
    waktuAbsen: 'waktuAbsen'
  };

  export type AbsensiScalarFieldEnum = (typeof AbsensiScalarFieldEnum)[keyof typeof AbsensiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    nama: 'nama',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SiswaOrderByRelevanceFieldEnum: {
    nisn: 'nisn',
    kelas: 'kelas',
    jurusan: 'jurusan'
  };

  export type SiswaOrderByRelevanceFieldEnum = (typeof SiswaOrderByRelevanceFieldEnum)[keyof typeof SiswaOrderByRelevanceFieldEnum]


  export const GuruOrderByRelevanceFieldEnum: {
    nip: 'nip',
    mapel: 'mapel'
  };

  export type GuruOrderByRelevanceFieldEnum = (typeof GuruOrderByRelevanceFieldEnum)[keyof typeof GuruOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AbsensiOrderByRelevanceFieldEnum: {
    keterangan: 'keterangan'
  };

  export type AbsensiOrderByRelevanceFieldEnum = (typeof AbsensiOrderByRelevanceFieldEnum)[keyof typeof AbsensiOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nama?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    siswa?: XOR<SiswaNullableScalarRelationFilter, SiswaWhereInput> | null
    guru?: XOR<GuruNullableScalarRelationFilter, GuruWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siswa?: SiswaOrderByWithRelationInput
    guru?: GuruOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    siswa?: XOR<SiswaNullableScalarRelationFilter, SiswaWhereInput> | null
    guru?: XOR<GuruNullableScalarRelationFilter, GuruWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nama?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SiswaWhereInput = {
    AND?: SiswaWhereInput | SiswaWhereInput[]
    OR?: SiswaWhereInput[]
    NOT?: SiswaWhereInput | SiswaWhereInput[]
    id?: IntFilter<"Siswa"> | number
    userId?: IntFilter<"Siswa"> | number
    nisn?: StringFilter<"Siswa"> | string
    kelas?: StringFilter<"Siswa"> | string
    jurusan?: StringFilter<"Siswa"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    absensi?: AbsensiListRelationFilter
  }

  export type SiswaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nisn?: SortOrder
    kelas?: SortOrder
    jurusan?: SortOrder
    user?: UserOrderByWithRelationInput
    absensi?: AbsensiOrderByRelationAggregateInput
    _relevance?: SiswaOrderByRelevanceInput
  }

  export type SiswaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: SiswaWhereInput | SiswaWhereInput[]
    OR?: SiswaWhereInput[]
    NOT?: SiswaWhereInput | SiswaWhereInput[]
    nisn?: StringFilter<"Siswa"> | string
    kelas?: StringFilter<"Siswa"> | string
    jurusan?: StringFilter<"Siswa"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    absensi?: AbsensiListRelationFilter
  }, "id" | "userId">

  export type SiswaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nisn?: SortOrder
    kelas?: SortOrder
    jurusan?: SortOrder
    _count?: SiswaCountOrderByAggregateInput
    _avg?: SiswaAvgOrderByAggregateInput
    _max?: SiswaMaxOrderByAggregateInput
    _min?: SiswaMinOrderByAggregateInput
    _sum?: SiswaSumOrderByAggregateInput
  }

  export type SiswaScalarWhereWithAggregatesInput = {
    AND?: SiswaScalarWhereWithAggregatesInput | SiswaScalarWhereWithAggregatesInput[]
    OR?: SiswaScalarWhereWithAggregatesInput[]
    NOT?: SiswaScalarWhereWithAggregatesInput | SiswaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Siswa"> | number
    userId?: IntWithAggregatesFilter<"Siswa"> | number
    nisn?: StringWithAggregatesFilter<"Siswa"> | string
    kelas?: StringWithAggregatesFilter<"Siswa"> | string
    jurusan?: StringWithAggregatesFilter<"Siswa"> | string
  }

  export type GuruWhereInput = {
    AND?: GuruWhereInput | GuruWhereInput[]
    OR?: GuruWhereInput[]
    NOT?: GuruWhereInput | GuruWhereInput[]
    id?: IntFilter<"Guru"> | number
    userId?: IntFilter<"Guru"> | number
    nip?: StringFilter<"Guru"> | string
    mapel?: StringFilter<"Guru"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    absensi?: AbsensiListRelationFilter
  }

  export type GuruOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nip?: SortOrder
    mapel?: SortOrder
    user?: UserOrderByWithRelationInput
    absensi?: AbsensiOrderByRelationAggregateInput
    _relevance?: GuruOrderByRelevanceInput
  }

  export type GuruWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: GuruWhereInput | GuruWhereInput[]
    OR?: GuruWhereInput[]
    NOT?: GuruWhereInput | GuruWhereInput[]
    nip?: StringFilter<"Guru"> | string
    mapel?: StringFilter<"Guru"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    absensi?: AbsensiListRelationFilter
  }, "id" | "userId">

  export type GuruOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nip?: SortOrder
    mapel?: SortOrder
    _count?: GuruCountOrderByAggregateInput
    _avg?: GuruAvgOrderByAggregateInput
    _max?: GuruMaxOrderByAggregateInput
    _min?: GuruMinOrderByAggregateInput
    _sum?: GuruSumOrderByAggregateInput
  }

  export type GuruScalarWhereWithAggregatesInput = {
    AND?: GuruScalarWhereWithAggregatesInput | GuruScalarWhereWithAggregatesInput[]
    OR?: GuruScalarWhereWithAggregatesInput[]
    NOT?: GuruScalarWhereWithAggregatesInput | GuruScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Guru"> | number
    userId?: IntWithAggregatesFilter<"Guru"> | number
    nip?: StringWithAggregatesFilter<"Guru"> | string
    mapel?: StringWithAggregatesFilter<"Guru"> | string
  }

  export type AbsensiWhereInput = {
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    id?: IntFilter<"Absensi"> | number
    siswaId?: IntFilter<"Absensi"> | number
    guruId?: IntNullableFilter<"Absensi"> | number | null
    tanggal?: DateTimeFilter<"Absensi"> | Date | string
    status?: EnumStatusFilter<"Absensi"> | $Enums.Status
    keterangan?: StringNullableFilter<"Absensi"> | string | null
    waktuAbsen?: DateTimeFilter<"Absensi"> | Date | string
    siswa?: XOR<SiswaScalarRelationFilter, SiswaWhereInput>
    guru?: XOR<GuruNullableScalarRelationFilter, GuruWhereInput> | null
  }

  export type AbsensiOrderByWithRelationInput = {
    id?: SortOrder
    siswaId?: SortOrder
    guruId?: SortOrderInput | SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    waktuAbsen?: SortOrder
    siswa?: SiswaOrderByWithRelationInput
    guru?: GuruOrderByWithRelationInput
    _relevance?: AbsensiOrderByRelevanceInput
  }

  export type AbsensiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    siswaId?: IntFilter<"Absensi"> | number
    guruId?: IntNullableFilter<"Absensi"> | number | null
    tanggal?: DateTimeFilter<"Absensi"> | Date | string
    status?: EnumStatusFilter<"Absensi"> | $Enums.Status
    keterangan?: StringNullableFilter<"Absensi"> | string | null
    waktuAbsen?: DateTimeFilter<"Absensi"> | Date | string
    siswa?: XOR<SiswaScalarRelationFilter, SiswaWhereInput>
    guru?: XOR<GuruNullableScalarRelationFilter, GuruWhereInput> | null
  }, "id">

  export type AbsensiOrderByWithAggregationInput = {
    id?: SortOrder
    siswaId?: SortOrder
    guruId?: SortOrderInput | SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    waktuAbsen?: SortOrder
    _count?: AbsensiCountOrderByAggregateInput
    _avg?: AbsensiAvgOrderByAggregateInput
    _max?: AbsensiMaxOrderByAggregateInput
    _min?: AbsensiMinOrderByAggregateInput
    _sum?: AbsensiSumOrderByAggregateInput
  }

  export type AbsensiScalarWhereWithAggregatesInput = {
    AND?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    OR?: AbsensiScalarWhereWithAggregatesInput[]
    NOT?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Absensi"> | number
    siswaId?: IntWithAggregatesFilter<"Absensi"> | number
    guruId?: IntNullableWithAggregatesFilter<"Absensi"> | number | null
    tanggal?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Absensi"> | $Enums.Status
    keterangan?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    waktuAbsen?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
  }

  export type UserCreateInput = {
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    siswa?: SiswaCreateNestedOneWithoutUserInput
    guru?: GuruCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    siswa?: SiswaUncheckedCreateNestedOneWithoutUserInput
    guru?: GuruUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: SiswaUpdateOneWithoutUserNestedInput
    guru?: GuruUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: SiswaUncheckedUpdateOneWithoutUserNestedInput
    guru?: GuruUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiswaCreateInput = {
    nisn: string
    kelas: string
    jurusan: string
    user: UserCreateNestedOneWithoutSiswaInput
    absensi?: AbsensiCreateNestedManyWithoutSiswaInput
  }

  export type SiswaUncheckedCreateInput = {
    id?: number
    userId: number
    nisn: string
    kelas: string
    jurusan: string
    absensi?: AbsensiUncheckedCreateNestedManyWithoutSiswaInput
  }

  export type SiswaUpdateInput = {
    nisn?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSiswaNestedInput
    absensi?: AbsensiUpdateManyWithoutSiswaNestedInput
  }

  export type SiswaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    nisn?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    absensi?: AbsensiUncheckedUpdateManyWithoutSiswaNestedInput
  }

  export type SiswaCreateManyInput = {
    id?: number
    userId: number
    nisn: string
    kelas: string
    jurusan: string
  }

  export type SiswaUpdateManyMutationInput = {
    nisn?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
  }

  export type SiswaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    nisn?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
  }

  export type GuruCreateInput = {
    nip: string
    mapel: string
    user: UserCreateNestedOneWithoutGuruInput
    absensi?: AbsensiCreateNestedManyWithoutGuruInput
  }

  export type GuruUncheckedCreateInput = {
    id?: number
    userId: number
    nip: string
    mapel: string
    absensi?: AbsensiUncheckedCreateNestedManyWithoutGuruInput
  }

  export type GuruUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    mapel?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGuruNestedInput
    absensi?: AbsensiUpdateManyWithoutGuruNestedInput
  }

  export type GuruUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    mapel?: StringFieldUpdateOperationsInput | string
    absensi?: AbsensiUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type GuruCreateManyInput = {
    id?: number
    userId: number
    nip: string
    mapel: string
  }

  export type GuruUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    mapel?: StringFieldUpdateOperationsInput | string
  }

  export type GuruUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    mapel?: StringFieldUpdateOperationsInput | string
  }

  export type AbsensiCreateInput = {
    tanggal: Date | string
    status: $Enums.Status
    keterangan?: string | null
    waktuAbsen?: Date | string
    siswa: SiswaCreateNestedOneWithoutAbsensiInput
    guru?: GuruCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateInput = {
    id?: number
    siswaId: number
    guruId?: number | null
    tanggal: Date | string
    status: $Enums.Status
    keterangan?: string | null
    waktuAbsen?: Date | string
  }

  export type AbsensiUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: SiswaUpdateOneRequiredWithoutAbsensiNestedInput
    guru?: GuruUpdateOneWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    siswaId?: IntFieldUpdateOperationsInput | number
    guruId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiCreateManyInput = {
    id?: number
    siswaId: number
    guruId?: number | null
    tanggal: Date | string
    status: $Enums.Status
    keterangan?: string | null
    waktuAbsen?: Date | string
  }

  export type AbsensiUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    siswaId?: IntFieldUpdateOperationsInput | number
    guruId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SiswaNullableScalarRelationFilter = {
    is?: SiswaWhereInput | null
    isNot?: SiswaWhereInput | null
  }

  export type GuruNullableScalarRelationFilter = {
    is?: GuruWhereInput | null
    isNot?: GuruWhereInput | null
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AbsensiListRelationFilter = {
    every?: AbsensiWhereInput
    some?: AbsensiWhereInput
    none?: AbsensiWhereInput
  }

  export type AbsensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiswaOrderByRelevanceInput = {
    fields: SiswaOrderByRelevanceFieldEnum | SiswaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SiswaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nisn?: SortOrder
    kelas?: SortOrder
    jurusan?: SortOrder
  }

  export type SiswaAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SiswaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nisn?: SortOrder
    kelas?: SortOrder
    jurusan?: SortOrder
  }

  export type SiswaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nisn?: SortOrder
    kelas?: SortOrder
    jurusan?: SortOrder
  }

  export type SiswaSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type GuruOrderByRelevanceInput = {
    fields: GuruOrderByRelevanceFieldEnum | GuruOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GuruCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nip?: SortOrder
    mapel?: SortOrder
  }

  export type GuruAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type GuruMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nip?: SortOrder
    mapel?: SortOrder
  }

  export type GuruMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nip?: SortOrder
    mapel?: SortOrder
  }

  export type GuruSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SiswaScalarRelationFilter = {
    is?: SiswaWhereInput
    isNot?: SiswaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AbsensiOrderByRelevanceInput = {
    fields: AbsensiOrderByRelevanceFieldEnum | AbsensiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AbsensiCountOrderByAggregateInput = {
    id?: SortOrder
    siswaId?: SortOrder
    guruId?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    keterangan?: SortOrder
    waktuAbsen?: SortOrder
  }

  export type AbsensiAvgOrderByAggregateInput = {
    id?: SortOrder
    siswaId?: SortOrder
    guruId?: SortOrder
  }

  export type AbsensiMaxOrderByAggregateInput = {
    id?: SortOrder
    siswaId?: SortOrder
    guruId?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    keterangan?: SortOrder
    waktuAbsen?: SortOrder
  }

  export type AbsensiMinOrderByAggregateInput = {
    id?: SortOrder
    siswaId?: SortOrder
    guruId?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    keterangan?: SortOrder
    waktuAbsen?: SortOrder
  }

  export type AbsensiSumOrderByAggregateInput = {
    id?: SortOrder
    siswaId?: SortOrder
    guruId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SiswaCreateNestedOneWithoutUserInput = {
    create?: XOR<SiswaCreateWithoutUserInput, SiswaUncheckedCreateWithoutUserInput>
    connectOrCreate?: SiswaCreateOrConnectWithoutUserInput
    connect?: SiswaWhereUniqueInput
  }

  export type GuruCreateNestedOneWithoutUserInput = {
    create?: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuruCreateOrConnectWithoutUserInput
    connect?: GuruWhereUniqueInput
  }

  export type SiswaUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SiswaCreateWithoutUserInput, SiswaUncheckedCreateWithoutUserInput>
    connectOrCreate?: SiswaCreateOrConnectWithoutUserInput
    connect?: SiswaWhereUniqueInput
  }

  export type GuruUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuruCreateOrConnectWithoutUserInput
    connect?: GuruWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SiswaUpdateOneWithoutUserNestedInput = {
    create?: XOR<SiswaCreateWithoutUserInput, SiswaUncheckedCreateWithoutUserInput>
    connectOrCreate?: SiswaCreateOrConnectWithoutUserInput
    upsert?: SiswaUpsertWithoutUserInput
    disconnect?: SiswaWhereInput | boolean
    delete?: SiswaWhereInput | boolean
    connect?: SiswaWhereUniqueInput
    update?: XOR<XOR<SiswaUpdateToOneWithWhereWithoutUserInput, SiswaUpdateWithoutUserInput>, SiswaUncheckedUpdateWithoutUserInput>
  }

  export type GuruUpdateOneWithoutUserNestedInput = {
    create?: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuruCreateOrConnectWithoutUserInput
    upsert?: GuruUpsertWithoutUserInput
    disconnect?: GuruWhereInput | boolean
    delete?: GuruWhereInput | boolean
    connect?: GuruWhereUniqueInput
    update?: XOR<XOR<GuruUpdateToOneWithWhereWithoutUserInput, GuruUpdateWithoutUserInput>, GuruUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SiswaUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SiswaCreateWithoutUserInput, SiswaUncheckedCreateWithoutUserInput>
    connectOrCreate?: SiswaCreateOrConnectWithoutUserInput
    upsert?: SiswaUpsertWithoutUserInput
    disconnect?: SiswaWhereInput | boolean
    delete?: SiswaWhereInput | boolean
    connect?: SiswaWhereUniqueInput
    update?: XOR<XOR<SiswaUpdateToOneWithWhereWithoutUserInput, SiswaUpdateWithoutUserInput>, SiswaUncheckedUpdateWithoutUserInput>
  }

  export type GuruUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuruCreateOrConnectWithoutUserInput
    upsert?: GuruUpsertWithoutUserInput
    disconnect?: GuruWhereInput | boolean
    delete?: GuruWhereInput | boolean
    connect?: GuruWhereUniqueInput
    update?: XOR<XOR<GuruUpdateToOneWithWhereWithoutUserInput, GuruUpdateWithoutUserInput>, GuruUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSiswaInput = {
    create?: XOR<UserCreateWithoutSiswaInput, UserUncheckedCreateWithoutSiswaInput>
    connectOrCreate?: UserCreateOrConnectWithoutSiswaInput
    connect?: UserWhereUniqueInput
  }

  export type AbsensiCreateNestedManyWithoutSiswaInput = {
    create?: XOR<AbsensiCreateWithoutSiswaInput, AbsensiUncheckedCreateWithoutSiswaInput> | AbsensiCreateWithoutSiswaInput[] | AbsensiUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutSiswaInput | AbsensiCreateOrConnectWithoutSiswaInput[]
    createMany?: AbsensiCreateManySiswaInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type AbsensiUncheckedCreateNestedManyWithoutSiswaInput = {
    create?: XOR<AbsensiCreateWithoutSiswaInput, AbsensiUncheckedCreateWithoutSiswaInput> | AbsensiCreateWithoutSiswaInput[] | AbsensiUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutSiswaInput | AbsensiCreateOrConnectWithoutSiswaInput[]
    createMany?: AbsensiCreateManySiswaInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSiswaNestedInput = {
    create?: XOR<UserCreateWithoutSiswaInput, UserUncheckedCreateWithoutSiswaInput>
    connectOrCreate?: UserCreateOrConnectWithoutSiswaInput
    upsert?: UserUpsertWithoutSiswaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSiswaInput, UserUpdateWithoutSiswaInput>, UserUncheckedUpdateWithoutSiswaInput>
  }

  export type AbsensiUpdateManyWithoutSiswaNestedInput = {
    create?: XOR<AbsensiCreateWithoutSiswaInput, AbsensiUncheckedCreateWithoutSiswaInput> | AbsensiCreateWithoutSiswaInput[] | AbsensiUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutSiswaInput | AbsensiCreateOrConnectWithoutSiswaInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutSiswaInput | AbsensiUpsertWithWhereUniqueWithoutSiswaInput[]
    createMany?: AbsensiCreateManySiswaInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutSiswaInput | AbsensiUpdateWithWhereUniqueWithoutSiswaInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutSiswaInput | AbsensiUpdateManyWithWhereWithoutSiswaInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type AbsensiUncheckedUpdateManyWithoutSiswaNestedInput = {
    create?: XOR<AbsensiCreateWithoutSiswaInput, AbsensiUncheckedCreateWithoutSiswaInput> | AbsensiCreateWithoutSiswaInput[] | AbsensiUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutSiswaInput | AbsensiCreateOrConnectWithoutSiswaInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutSiswaInput | AbsensiUpsertWithWhereUniqueWithoutSiswaInput[]
    createMany?: AbsensiCreateManySiswaInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutSiswaInput | AbsensiUpdateWithWhereUniqueWithoutSiswaInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutSiswaInput | AbsensiUpdateManyWithWhereWithoutSiswaInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGuruInput = {
    create?: XOR<UserCreateWithoutGuruInput, UserUncheckedCreateWithoutGuruInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuruInput
    connect?: UserWhereUniqueInput
  }

  export type AbsensiCreateNestedManyWithoutGuruInput = {
    create?: XOR<AbsensiCreateWithoutGuruInput, AbsensiUncheckedCreateWithoutGuruInput> | AbsensiCreateWithoutGuruInput[] | AbsensiUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutGuruInput | AbsensiCreateOrConnectWithoutGuruInput[]
    createMany?: AbsensiCreateManyGuruInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type AbsensiUncheckedCreateNestedManyWithoutGuruInput = {
    create?: XOR<AbsensiCreateWithoutGuruInput, AbsensiUncheckedCreateWithoutGuruInput> | AbsensiCreateWithoutGuruInput[] | AbsensiUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutGuruInput | AbsensiCreateOrConnectWithoutGuruInput[]
    createMany?: AbsensiCreateManyGuruInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGuruNestedInput = {
    create?: XOR<UserCreateWithoutGuruInput, UserUncheckedCreateWithoutGuruInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuruInput
    upsert?: UserUpsertWithoutGuruInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuruInput, UserUpdateWithoutGuruInput>, UserUncheckedUpdateWithoutGuruInput>
  }

  export type AbsensiUpdateManyWithoutGuruNestedInput = {
    create?: XOR<AbsensiCreateWithoutGuruInput, AbsensiUncheckedCreateWithoutGuruInput> | AbsensiCreateWithoutGuruInput[] | AbsensiUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutGuruInput | AbsensiCreateOrConnectWithoutGuruInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutGuruInput | AbsensiUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: AbsensiCreateManyGuruInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutGuruInput | AbsensiUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutGuruInput | AbsensiUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type AbsensiUncheckedUpdateManyWithoutGuruNestedInput = {
    create?: XOR<AbsensiCreateWithoutGuruInput, AbsensiUncheckedCreateWithoutGuruInput> | AbsensiCreateWithoutGuruInput[] | AbsensiUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutGuruInput | AbsensiCreateOrConnectWithoutGuruInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutGuruInput | AbsensiUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: AbsensiCreateManyGuruInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutGuruInput | AbsensiUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutGuruInput | AbsensiUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type SiswaCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<SiswaCreateWithoutAbsensiInput, SiswaUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: SiswaCreateOrConnectWithoutAbsensiInput
    connect?: SiswaWhereUniqueInput
  }

  export type GuruCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<GuruCreateWithoutAbsensiInput, GuruUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: GuruCreateOrConnectWithoutAbsensiInput
    connect?: GuruWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SiswaUpdateOneRequiredWithoutAbsensiNestedInput = {
    create?: XOR<SiswaCreateWithoutAbsensiInput, SiswaUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: SiswaCreateOrConnectWithoutAbsensiInput
    upsert?: SiswaUpsertWithoutAbsensiInput
    connect?: SiswaWhereUniqueInput
    update?: XOR<XOR<SiswaUpdateToOneWithWhereWithoutAbsensiInput, SiswaUpdateWithoutAbsensiInput>, SiswaUncheckedUpdateWithoutAbsensiInput>
  }

  export type GuruUpdateOneWithoutAbsensiNestedInput = {
    create?: XOR<GuruCreateWithoutAbsensiInput, GuruUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: GuruCreateOrConnectWithoutAbsensiInput
    upsert?: GuruUpsertWithoutAbsensiInput
    disconnect?: GuruWhereInput | boolean
    delete?: GuruWhereInput | boolean
    connect?: GuruWhereUniqueInput
    update?: XOR<XOR<GuruUpdateToOneWithWhereWithoutAbsensiInput, GuruUpdateWithoutAbsensiInput>, GuruUncheckedUpdateWithoutAbsensiInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SiswaCreateWithoutUserInput = {
    nisn: string
    kelas: string
    jurusan: string
    absensi?: AbsensiCreateNestedManyWithoutSiswaInput
  }

  export type SiswaUncheckedCreateWithoutUserInput = {
    id?: number
    nisn: string
    kelas: string
    jurusan: string
    absensi?: AbsensiUncheckedCreateNestedManyWithoutSiswaInput
  }

  export type SiswaCreateOrConnectWithoutUserInput = {
    where: SiswaWhereUniqueInput
    create: XOR<SiswaCreateWithoutUserInput, SiswaUncheckedCreateWithoutUserInput>
  }

  export type GuruCreateWithoutUserInput = {
    nip: string
    mapel: string
    absensi?: AbsensiCreateNestedManyWithoutGuruInput
  }

  export type GuruUncheckedCreateWithoutUserInput = {
    id?: number
    nip: string
    mapel: string
    absensi?: AbsensiUncheckedCreateNestedManyWithoutGuruInput
  }

  export type GuruCreateOrConnectWithoutUserInput = {
    where: GuruWhereUniqueInput
    create: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
  }

  export type SiswaUpsertWithoutUserInput = {
    update: XOR<SiswaUpdateWithoutUserInput, SiswaUncheckedUpdateWithoutUserInput>
    create: XOR<SiswaCreateWithoutUserInput, SiswaUncheckedCreateWithoutUserInput>
    where?: SiswaWhereInput
  }

  export type SiswaUpdateToOneWithWhereWithoutUserInput = {
    where?: SiswaWhereInput
    data: XOR<SiswaUpdateWithoutUserInput, SiswaUncheckedUpdateWithoutUserInput>
  }

  export type SiswaUpdateWithoutUserInput = {
    nisn?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    absensi?: AbsensiUpdateManyWithoutSiswaNestedInput
  }

  export type SiswaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nisn?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    absensi?: AbsensiUncheckedUpdateManyWithoutSiswaNestedInput
  }

  export type GuruUpsertWithoutUserInput = {
    update: XOR<GuruUpdateWithoutUserInput, GuruUncheckedUpdateWithoutUserInput>
    create: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
    where?: GuruWhereInput
  }

  export type GuruUpdateToOneWithWhereWithoutUserInput = {
    where?: GuruWhereInput
    data: XOR<GuruUpdateWithoutUserInput, GuruUncheckedUpdateWithoutUserInput>
  }

  export type GuruUpdateWithoutUserInput = {
    nip?: StringFieldUpdateOperationsInput | string
    mapel?: StringFieldUpdateOperationsInput | string
    absensi?: AbsensiUpdateManyWithoutGuruNestedInput
  }

  export type GuruUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    mapel?: StringFieldUpdateOperationsInput | string
    absensi?: AbsensiUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type UserCreateWithoutSiswaInput = {
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    guru?: GuruCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSiswaInput = {
    id?: number
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    guru?: GuruUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSiswaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSiswaInput, UserUncheckedCreateWithoutSiswaInput>
  }

  export type AbsensiCreateWithoutSiswaInput = {
    tanggal: Date | string
    status: $Enums.Status
    keterangan?: string | null
    waktuAbsen?: Date | string
    guru?: GuruCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateWithoutSiswaInput = {
    id?: number
    guruId?: number | null
    tanggal: Date | string
    status: $Enums.Status
    keterangan?: string | null
    waktuAbsen?: Date | string
  }

  export type AbsensiCreateOrConnectWithoutSiswaInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutSiswaInput, AbsensiUncheckedCreateWithoutSiswaInput>
  }

  export type AbsensiCreateManySiswaInputEnvelope = {
    data: AbsensiCreateManySiswaInput | AbsensiCreateManySiswaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSiswaInput = {
    update: XOR<UserUpdateWithoutSiswaInput, UserUncheckedUpdateWithoutSiswaInput>
    create: XOR<UserCreateWithoutSiswaInput, UserUncheckedCreateWithoutSiswaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSiswaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSiswaInput, UserUncheckedUpdateWithoutSiswaInput>
  }

  export type UserUpdateWithoutSiswaInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guru?: GuruUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guru?: GuruUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AbsensiUpsertWithWhereUniqueWithoutSiswaInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutSiswaInput, AbsensiUncheckedUpdateWithoutSiswaInput>
    create: XOR<AbsensiCreateWithoutSiswaInput, AbsensiUncheckedCreateWithoutSiswaInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutSiswaInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutSiswaInput, AbsensiUncheckedUpdateWithoutSiswaInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutSiswaInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutSiswaInput>
  }

  export type AbsensiScalarWhereInput = {
    AND?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    OR?: AbsensiScalarWhereInput[]
    NOT?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    id?: IntFilter<"Absensi"> | number
    siswaId?: IntFilter<"Absensi"> | number
    guruId?: IntNullableFilter<"Absensi"> | number | null
    tanggal?: DateTimeFilter<"Absensi"> | Date | string
    status?: EnumStatusFilter<"Absensi"> | $Enums.Status
    keterangan?: StringNullableFilter<"Absensi"> | string | null
    waktuAbsen?: DateTimeFilter<"Absensi"> | Date | string
  }

  export type UserCreateWithoutGuruInput = {
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    siswa?: SiswaCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGuruInput = {
    id?: number
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    siswa?: SiswaUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGuruInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuruInput, UserUncheckedCreateWithoutGuruInput>
  }

  export type AbsensiCreateWithoutGuruInput = {
    tanggal: Date | string
    status: $Enums.Status
    keterangan?: string | null
    waktuAbsen?: Date | string
    siswa: SiswaCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateWithoutGuruInput = {
    id?: number
    siswaId: number
    tanggal: Date | string
    status: $Enums.Status
    keterangan?: string | null
    waktuAbsen?: Date | string
  }

  export type AbsensiCreateOrConnectWithoutGuruInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutGuruInput, AbsensiUncheckedCreateWithoutGuruInput>
  }

  export type AbsensiCreateManyGuruInputEnvelope = {
    data: AbsensiCreateManyGuruInput | AbsensiCreateManyGuruInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGuruInput = {
    update: XOR<UserUpdateWithoutGuruInput, UserUncheckedUpdateWithoutGuruInput>
    create: XOR<UserCreateWithoutGuruInput, UserUncheckedCreateWithoutGuruInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuruInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuruInput, UserUncheckedUpdateWithoutGuruInput>
  }

  export type UserUpdateWithoutGuruInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: SiswaUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGuruInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: SiswaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AbsensiUpsertWithWhereUniqueWithoutGuruInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutGuruInput, AbsensiUncheckedUpdateWithoutGuruInput>
    create: XOR<AbsensiCreateWithoutGuruInput, AbsensiUncheckedCreateWithoutGuruInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutGuruInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutGuruInput, AbsensiUncheckedUpdateWithoutGuruInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutGuruInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutGuruInput>
  }

  export type SiswaCreateWithoutAbsensiInput = {
    nisn: string
    kelas: string
    jurusan: string
    user: UserCreateNestedOneWithoutSiswaInput
  }

  export type SiswaUncheckedCreateWithoutAbsensiInput = {
    id?: number
    userId: number
    nisn: string
    kelas: string
    jurusan: string
  }

  export type SiswaCreateOrConnectWithoutAbsensiInput = {
    where: SiswaWhereUniqueInput
    create: XOR<SiswaCreateWithoutAbsensiInput, SiswaUncheckedCreateWithoutAbsensiInput>
  }

  export type GuruCreateWithoutAbsensiInput = {
    nip: string
    mapel: string
    user: UserCreateNestedOneWithoutGuruInput
  }

  export type GuruUncheckedCreateWithoutAbsensiInput = {
    id?: number
    userId: number
    nip: string
    mapel: string
  }

  export type GuruCreateOrConnectWithoutAbsensiInput = {
    where: GuruWhereUniqueInput
    create: XOR<GuruCreateWithoutAbsensiInput, GuruUncheckedCreateWithoutAbsensiInput>
  }

  export type SiswaUpsertWithoutAbsensiInput = {
    update: XOR<SiswaUpdateWithoutAbsensiInput, SiswaUncheckedUpdateWithoutAbsensiInput>
    create: XOR<SiswaCreateWithoutAbsensiInput, SiswaUncheckedCreateWithoutAbsensiInput>
    where?: SiswaWhereInput
  }

  export type SiswaUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: SiswaWhereInput
    data: XOR<SiswaUpdateWithoutAbsensiInput, SiswaUncheckedUpdateWithoutAbsensiInput>
  }

  export type SiswaUpdateWithoutAbsensiInput = {
    nisn?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSiswaNestedInput
  }

  export type SiswaUncheckedUpdateWithoutAbsensiInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    nisn?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
  }

  export type GuruUpsertWithoutAbsensiInput = {
    update: XOR<GuruUpdateWithoutAbsensiInput, GuruUncheckedUpdateWithoutAbsensiInput>
    create: XOR<GuruCreateWithoutAbsensiInput, GuruUncheckedCreateWithoutAbsensiInput>
    where?: GuruWhereInput
  }

  export type GuruUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: GuruWhereInput
    data: XOR<GuruUpdateWithoutAbsensiInput, GuruUncheckedUpdateWithoutAbsensiInput>
  }

  export type GuruUpdateWithoutAbsensiInput = {
    nip?: StringFieldUpdateOperationsInput | string
    mapel?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGuruNestedInput
  }

  export type GuruUncheckedUpdateWithoutAbsensiInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    mapel?: StringFieldUpdateOperationsInput | string
  }

  export type AbsensiCreateManySiswaInput = {
    id?: number
    guruId?: number | null
    tanggal: Date | string
    status: $Enums.Status
    keterangan?: string | null
    waktuAbsen?: Date | string
  }

  export type AbsensiUpdateWithoutSiswaInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    guru?: GuruUpdateOneWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateWithoutSiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    guruId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUncheckedUpdateManyWithoutSiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    guruId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiCreateManyGuruInput = {
    id?: number
    siswaId: number
    tanggal: Date | string
    status: $Enums.Status
    keterangan?: string | null
    waktuAbsen?: Date | string
  }

  export type AbsensiUpdateWithoutGuruInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: SiswaUpdateOneRequiredWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateWithoutGuruInput = {
    id?: IntFieldUpdateOperationsInput | number
    siswaId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUncheckedUpdateManyWithoutGuruInput = {
    id?: IntFieldUpdateOperationsInput | number
    siswaId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}