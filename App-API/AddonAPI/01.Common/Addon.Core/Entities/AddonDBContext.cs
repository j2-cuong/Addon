using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Addon.Core.Entities
{
    public partial class AddonDBContext : DbContext
    {
        public AddonDBContext()
        {
        }

        public AddonDBContext(DbContextOptions<AddonDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CBookingStatus> CBookingStatuses { get; set; } = null!;
        public virtual DbSet<CDestination> CDestinations { get; set; } = null!;
        public virtual DbSet<CNavigation> CNavigations { get; set; } = null!;
        public virtual DbSet<CTourCategory> CTourCategories { get; set; } = null!;
        public virtual DbSet<CTransactionStatus> CTransactionStatuses { get; set; } = null!;
        public virtual DbSet<IBooking> IBookings { get; set; } = null!;
        public virtual DbSet<IBookingLog> IBookingLogs { get; set; } = null!;
        public virtual DbSet<IBookingTransaction> IBookingTransactions { get; set; } = null!;
        public virtual DbSet<ICategoryDiscount> ICategoryDiscounts { get; set; } = null!;
        public virtual DbSet<ICustomer> ICustomers { get; set; } = null!;
        public virtual DbSet<ITour> ITours { get; set; } = null!;
        public virtual DbSet<ITourDestination> ITourDestinations { get; set; } = null!;
        public virtual DbSet<ITourDetail> ITourDetails { get; set; } = null!;
        public virtual DbSet<ITourImage> ITourImages { get; set; } = null!;
        public virtual DbSet<ITourLog> ITourLogs { get; set; } = null!;
        public virtual DbSet<IWarn> IWarns { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=115.146.126.196,1444\\\\\\\\SQLExpress;Initial Catalog=AddonDB;User ID=sa;Password=9Gs3#fcJl&4O; MultipleActiveResultSets=True; Max Pool Size = 1024; Connect Timeout = 60");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CBookingStatus>(entity =>
            {
                entity.HasKey(e => e.StatusCode)
                    .HasName("PK__C_Bookin__6A7B44FD28B42FAF");

                entity.ToTable("C_BookingStatus");

                entity.Property(e => e.StatusCode).ValueGeneratedNever();

                entity.Property(e => e.StatusName).HasMaxLength(250);
            });

            modelBuilder.Entity<CDestination>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("C_Destination");

                entity.Property(e => e.Code)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NameVi)
                    .HasMaxLength(100)
                    .HasColumnName("Name_Vi");

                entity.Property(e => e.ParentCode)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CNavigation>(entity =>
            {
                entity.HasKey(e => e.NavId)
                    .HasName("PK__C_Naviga__67283A730C735909");

                entity.ToTable("C_Navigation");

                entity.Property(e => e.NavId)
                    .ValueGeneratedNever()
                    .HasColumnName("NavID");

                entity.Property(e => e.NavCode)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.NavName).HasMaxLength(50);
            });

            modelBuilder.Entity<CTourCategory>(entity =>
            {
                entity.HasKey(e => e.CategoryId)
                    .HasName("PK__C_TourCa__19093A0B186A37C3");

                entity.ToTable("C_TourCategory");

                entity.Property(e => e.CategoryId).ValueGeneratedNever();

                entity.Property(e => e.CategoryCode)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName).HasMaxLength(250);
            });

            modelBuilder.Entity<CTransactionStatus>(entity =>
            {
                entity.HasKey(e => e.StatusCode)
                    .HasName("PK__C_Transa__6A7B44FD4564E8CE");

                entity.ToTable("C_TransactionStatus");

                entity.Property(e => e.StatusCode).ValueGeneratedNever();

                entity.Property(e => e.StatusName).HasMaxLength(250);
            });

            modelBuilder.Entity<IBooking>(entity =>
            {
                entity.HasKey(e => e.BookingId)
                    .HasName("PK__I_Bookin__73951AED17EC6B08");

                entity.ToTable("I_Booking");

                entity.Property(e => e.BookingId).ValueGeneratedNever();

                entity.Property(e => e.CreatedTime).HasColumnType("datetime");

                entity.Property(e => e.DiscountAmount).HasColumnType("decimal(21, 6)");

                entity.Property(e => e.LastIssueDate).HasColumnType("datetime");

                entity.Property(e => e.PartnerCode)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentPrice).HasColumnType("decimal(21, 6)");

                entity.Property(e => e.Price).HasColumnType("decimal(21, 6)");

                entity.Property(e => e.PrivateRoomPrice).HasColumnType("decimal(21, 6)");

                entity.Property(e => e.UpdatedTime).HasColumnType("datetime");

                entity.Property(e => e.VisaPrice).HasColumnType("decimal(21, 6)");
            });

            modelBuilder.Entity<IBookingLog>(entity =>
            {
                entity.ToTable("I_BookingLog");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Desc).HasColumnName("_desc");

                entity.Property(e => e.Logtime).HasColumnType("datetime");
            });

            modelBuilder.Entity<IBookingTransaction>(entity =>
            {
                entity.HasKey(e => e.TransactionId)
                    .HasName("PK__I_Bookin__55433A6B63AEF6D1");

                entity.ToTable("I_BookingTransaction");

                entity.Property(e => e.TransactionId).ValueGeneratedNever();

                entity.Property(e => e.Amount).HasColumnType("decimal(21, 6)");

                entity.Property(e => e.PartnerCode)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Time).HasColumnType("datetime");
            });

            modelBuilder.Entity<ICategoryDiscount>(entity =>
            {
                entity.HasKey(e => e.DiscountId)
                    .HasName("PK__I_Catego__E43F6D9610C6A61A");

                entity.ToTable("I_CategoryDiscount");

                entity.Property(e => e.DiscountId).ValueGeneratedNever();

                entity.Property(e => e.DiscountMax).HasColumnType("decimal(21, 6)");

                entity.Property(e => e.PartnerCode)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ICustomer>(entity =>
            {
                entity.HasKey(e => e.CustomerId)
                    .HasName("PK__I_Custom__A4AE64D8811BDE4A");

                entity.ToTable("I_Customer");

                entity.Property(e => e.CustomerId).ValueGeneratedNever();

                entity.Property(e => e.AgeType)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyName).HasMaxLength(250);

                entity.Property(e => e.ContactAddress).HasMaxLength(500);

                entity.Property(e => e.CustomerName).HasMaxLength(250);

                entity.Property(e => e.CustomerType)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TaxCode)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ITour>(entity =>
            {
                entity.HasKey(e => e.TourId)
                    .HasName("PK__I_Tour__604CEA30B0A84F9D");

                entity.ToTable("I_Tour");

                entity.Property(e => e.TourId).ValueGeneratedNever();

                entity.Property(e => e.Adtprice)
                    .HasColumnType("decimal(21, 6)")
                    .HasColumnName("ADTPrice");

                entity.Property(e => e.ArrivalTime).HasColumnType("datetime");

                entity.Property(e => e.Chdprice)
                    .HasColumnType("decimal(21, 6)")
                    .HasColumnName("CHDPrice");

                entity.Property(e => e.CreatedTime).HasColumnType("datetime");

                entity.Property(e => e.DepartureLocationCode)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DepartureTime).HasColumnType("datetime");

                entity.Property(e => e.DestinationDesc).HasMaxLength(250);

                entity.Property(e => e.FirstCharge)
                    .HasMaxLength(4)
                    .IsUnicode(false);

                entity.Property(e => e.IdealTimeDesc).HasMaxLength(250);

                entity.Property(e => e.Infprice)
                    .HasColumnType("decimal(21, 6)")
                    .HasColumnName("INFPrice");

                entity.Property(e => e.Price).HasColumnType("decimal(18, 6)");

                entity.Property(e => e.PrivateRoomPrice).HasColumnType("decimal(21, 6)");

                entity.Property(e => e.SecondChargeTime).HasColumnType("datetime");

                entity.Property(e => e.SpecialOfferDesc).HasMaxLength(250);

                entity.Property(e => e.TargetDesc).HasMaxLength(250);

                entity.Property(e => e.TimeDesc).HasMaxLength(250);

                entity.Property(e => e.TourName).HasMaxLength(250);

                entity.Property(e => e.UpdatedTime).HasColumnType("datetime");

                entity.Property(e => e.VehicleDesc).HasMaxLength(250);

                entity.Property(e => e.VisaPrice).HasColumnType("decimal(21, 6)");
            });

            modelBuilder.Entity<ITourDestination>(entity =>
            {
                entity.ToTable("I_TourDestination");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.DestinationCode)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ITourDetail>(entity =>
            {
                entity.HasKey(e => e.TourDetailId)
                    .HasName("PK__I_TourDe__5055BC9C0C1B226B");

                entity.ToTable("I_TourDetail");

                entity.Property(e => e.TourDetailId).ValueGeneratedNever();
            });

            modelBuilder.Entity<ITourImage>(entity =>
            {
                entity.HasKey(e => e.ImageId)
                    .HasName("PK__I_TourIm__7516F70C55B16C63");

                entity.ToTable("I_TourImages");

                entity.Property(e => e.ImageId).ValueGeneratedNever();

                entity.Property(e => e.CreatedTime).HasColumnType("datetime");

                entity.Property(e => e.ImageType)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ITourLog>(entity =>
            {
                entity.ToTable("I_TourLog");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Desc).HasColumnName("_desc");

                entity.Property(e => e.LogTime).HasColumnType("datetime");
            });

            modelBuilder.Entity<IWarn>(entity =>
            {
                entity.HasKey(e => e.WarnId)
                    .HasName("PK__I_Warn__D43EC6D9F2BFA29B");

                entity.ToTable("I_Warn");

                entity.Property(e => e.WarnId).ValueGeneratedNever();

                entity.Property(e => e.PartnerCode)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Title).HasMaxLength(250);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
